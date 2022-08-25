import {Link} from 'react-router-dom';
export default function Contato() {
    return (
      <div>
       <h1>Contatos</h1>
       <span>Email:teste@test.com</span><br/>
       <Link to= "/home">Home</Link><br/>
       <Link to= "/sobre">Sobre</Link>
      </div>
    );
  }
  