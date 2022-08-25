
import { useState, useEffect, useContext } from 'react';

import './new.css';
import firebase from '../../services/firebaseConnection';
import {useHistory, useParams} from 'react-router-dom';

import Header from '../../components/Header';
import Title from '../../components/Title';
import { AuthContext } from '../../contexts/auth';
import {toast, ToastContainer} from 'react-toastify';

import {FiPlusCircle} from 'react-icons/fi';

export default function New(){
    const {id} = useParams();
    const history = useHistory();

    const [loadCustomers, setLoadCustomers] = useState(true);
    const[customers, setCustomers]= useState([]);
    const [customerSelected, setCustomerSelected] = useState(0);

    const [assunto, setAssunto] = useState('Suporte'); 
    const [status, setStatus] = useState('Aberto');
    const [complemento, setComplemento] = useState('');

    const [idCustomer, setIdCustomer] = useState(false);

    const {user} = useContext(AuthContext);

    useEffect(()=>{
        async function loadCustomers(){
            await firebase.firestore().collection('customers')
            .get()
            .then((snapshot)=>{
                let lista = [];

                snapshot.forEach((doc)=>{
                    lista.push({
                        id:doc.id,
                        nomefantasia: doc.data().nomefantasia
                    })
                })
                if(lista.length === 0){
                    console.log('Nenhuma empresa encontrada');
                    setLoadCustomers([{id:'1', nomefantasia:''}]);
                    setLoadCustomers(false);
                    return;
                }
                setCustomers(lista);
                setLoadCustomers(false);

                if(id){
                    loadId(lista)
                }
            })
            .catch((error)=>{
                console.log('Deu algum erro!', error);
                setLoadCustomers(false);
                setLoadCustomers([{id:'1', nomefantasia:''}]);
            })
        }
        loadCustomers();
    },[id,])
async function loadId(lista){
    await firebase.firestore().collection('chamados').doc(id)
    .get()
    .then((snapshot)=>{
        setAssunto(snapshot.data().assunto);
        setStatus(snapshot.data().status);
        setComplemento(snapshot.data().complemento);

        let index = lista.findIndex(item=> item.id === snapshot.data().clienteId)
        setCustomerSelected(index);
        setIdCustomer(true);
    })
    .catch((err)=>{
        console.log('Erro no ID passado:');
        setIdCustomer(false);
    })
}
    
function handleRegister(e){
    e.preventDefault();

    if(idCustomer){
        firebase.firestore().collection('chamados')
        .doc(id)
        .update({
            cliente: customers[customerSelected].nomefantasia,
            clienteId: customers[customerSelected].id,
            assunto: assunto,
            status: status,
            complemento: complemento,
            userId: user.uid
        })
        .then(()=>{
            toast.success('Chamado editado com sucesso!');
            setCustomerSelected(0);
            setComplemento('');
            history.push('/dashboard')
        })
        .catch((err)=>{
            toast.error('Ops erro ao registrar, tente mais tarde!')
            console.log(err);
        })
        return;
    }

     firebase.firestore().collection('chamados')
    .add({
        created: new Date(),
        cliente: customers[customerSelected].nomefantasia,
        clienteId: customers[customerSelected].id,
        assunto: assunto,
        status: status,
        complemento: complemento,
        userId: user.uid
    })
    .then(()=>{
        toast.success('Chamado criado com sucesso!')
        setComplemento('');
        setCustomerSelected(0);
    })
    .catch((err)=>{
        ToastContainer.error('Ops, erro ao registrar!')
        console.log(err);
    })
}
//chama quando troca assunto
function handleChangeSelect(e){
    setAssunto(e.target.value);
    console.log(e.target.value);
}
//chama quando troca status
function handleOpitonChange(e){
    setStatus(e.target.value);
    console.log(e.target.value);
}
//chamado quando troca de cliente
function handleChangeCustomers(e){
    console.log('INDEX DO CLIENTE SELECIONADO: ', e.target.value);
    console.log('Cliente selecionado ', customers[e.target.value])
    setCustomerSelected(e.target.value);
}

    return(
    <div>
        <Header/>
        <div className="content" >
            <Title name="Novo Chamado" >
                <FiPlusCircle size={25} />
            </Title>
            <div className="container" >

                <form className="form-profile" onSubmit={handleRegister} >
                   
                    <label>Cliente</label>

                        {loadCustomers ? (
                            <input type="text" disabled={true} value="carregando clientes..." />
                        ): (
                            <select value={customerSelected} onChange={handleChangeCustomers} >
                                {customers.map((item, index) => {
                                return(
                                    <option key={item.id} value={index} >
                                    {item.nomefantasia}
                                    </option>
                                )
                                })}
                            </select>
                        )}

                     
                    <label>Assunto</label>
                    <select value={assunto} onChange={handleChangeSelect}>
                        <option value="Suporte">Suporte</option>
                        <option value="Visita Tecnica">Visita Tecnica</option>
                        <option value="Financeiro">Financeiro</option>
                    </select>

                    <label>Status</label>
                    <div className="status" >
                        <input type="radio"
                        name="radio"
                        value="Aberto" 
                        onChange={handleOpitonChange}
                        checked={status === 'Aberto'}
                        />

                        <span>Em Aberto</span>
                        <input type="radio"
                        name="radio"
                        value="Progresso" 
                        onChange={handleOpitonChange}
                        checked={status === 'Progresso'}
                        />

                        <span>Em progresso</span>
                        <input type="radio" 
                        name="radio" 
                        value="Atendido" 
                        onChange={handleOpitonChange}
                        checked={status === 'Atendido'}
                        />
                        <span>Atendido</span>

                    </div>

                    <label>Complemento</label>
                    <textarea 
                    type="text" 
                    placeholder="Descreva seu problema(opicional)." 
                    value={complemento}
                    onChange={(e)=> setComplemento(e.target.value)}
                    />
                    <button type="submit" >Registrar</button>
                </form>
            </div>
        </div>
    </div>
    )
}