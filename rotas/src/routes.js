import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from'./pages/Home';
import Sobre from'./pages/Sobre';
import Contato from'./pages/Contato';
import Produto from'./pages/Produto';
import Erro from './pages/Erro';
import Header from './components/Header';
const Routes = () =>{
    return(
<BrowserRouter>
<Header/>
<Switch>
<Route exact path="/home" component={Home}/>
<Route path="/sobre" component={Sobre}/>
<Route path="/contato" component={Contato}/>
<Route path="/produto/:id" component={Produto}/>
<Route path= "*" component= {Erro}></Route>
</Switch>
</BrowserRouter>
    )
}
export default Routes;