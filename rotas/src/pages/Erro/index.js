import {Link} from 'react-router-dom';
export default function Erro() {
  return (
    <div>
     <h1>hum, parece que essa pagina não existe!</h1><br/>
     <span>Você pode está procurando:</span><br/>
     <Link to="/home">Home</Link><br/>
     <Link to="/sobre">Sobre</Link><br/>
     <Link to="/contato">Contato</Link>
    </div>
  );
}

