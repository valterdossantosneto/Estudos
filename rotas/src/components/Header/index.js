import {Link} from 'react-router-dom';
export default function Header(){
    return(
        <headder>
        <h2>Header da Pagina</h2>
        <Link to= "/contato">Contato</Link>
        </headder>
    )
}