import React, {Component} from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      email:'teste@teste.com',
      senha:'',
      sexo:'masculino',
    }
    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }
  trocaEmail(e){
let valorDigitado = e.target.value;
this.setState({email: valorDigitado});
  }
  trocaSexo(e){
    let valorDigitado = e.target.value;
    this.setState({sexo: valorDigitado});
  }
  render(){
    return (
      <div >
        Email:<br/>
        <input type="email" name="email" value={this.state.email} onChange={this.trocaEmail}/><br/>
        senha:<br/>
        <input type="password" name="senha" Value={this.state.senha}
        onChange= {(e)=> this.setState({senha: e.target.value})}/><br/>
        <select name="sexo" avlue={this.state.sexo} onChange={this.trocaSexo}>
          <option value= "masculino">Masculino</option>
          <option value= "Feminino">Feminino</option>
        </select>
        <div>
        <h3>{this.state.email}</h3>
        <h3>{this.state.senha}</h3>
        <h3>{this.state.sexo}</h3>
        </div>
      </div>
      
    ); 
  }
}

export default App;
