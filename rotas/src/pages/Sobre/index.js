import {Link} from 'react-router-dom';
export default function Sobre() {
  return (
    <div>
     <h1>Sobre o curso Reactjs...</h1>
     <Link to="/home">Home</Link><br/>
     <Link to="/contato">Contato</Link>
    </div>
  );
}

