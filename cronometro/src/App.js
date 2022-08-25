import React,{ Component } from 'react';
import './style.css'
class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      numero:0,
      botao:'vai',
    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

  }
  vai(){
    let state = this.state;
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer =null;
      state.botao ='vai';

    }else{
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero +=0.1;
        this.setState(state);
  },100);
  state.botao ='pausar';
    }
    this.setState(state);
  }
  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer =null;
    }
    let state =this.state;
    state.numero =0;
    state.botao ='vai';
    this.setState(state);
  }
  render(){
    return (
      <div className="container">
        <img src={require('./assets/cronometro.png')} className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBrn">
          <a className="botão" onClick={this.vai}>{this.state.botao}</a>
          <a className="botão" onClick={this.limpar}>limpar</a>
        </div>
      </div>
    );
  }
}

export default App;
