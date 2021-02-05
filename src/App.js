import React from 'react';
import './App.css';

class App extends React.Component{

  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  increment= () => {
    this.setState({
      count: this.state.count +1
    })
  }

  decrement= () => {
    this.setState({
      count: this.state.count -1
    })
  }

  render(){
    return(
      <div>
        <button onClick={this.increment}>Incrementar</button>
        <button onClick={this.decrement}>Decrementar</button>
        <h2>{this.state.count}</h2>
      </div>
    );
  }

}

export default App;
