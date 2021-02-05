import React from 'react';
import './App.css';

class Counter extends React.Component{

  increment = () => {
    
  }

  alterarTitulo = () => {
    
  }

  render(){
    return(
      <div>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.alterarTitulo}>Alterar título</button>
        <h2>10</h2>
      </div>
    );
  }

}

export default Counter;
