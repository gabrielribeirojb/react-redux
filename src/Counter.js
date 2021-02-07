import React from 'react';
import { connect } from 'react-redux';
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
        <h2>{this.props.count}</h2>
        <h2>{this.props.title}</h2>
      </div>
    );
  }

}

const mapStateToProps = state => ({
  count: state.count,
  title: state.title
});

export default connect(mapStateToProps)(Counter);
