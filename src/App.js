import React from 'react';
import {createStore} from 'redux';
import './App.css';

const reducer = (state, action) =>{
  if(action.type === 'INC'){
    return state + action.payload;
  }
  else if(action.type === 'DESC'){
    return state - action.payload;
  }
  return state;
}

const store = createStore(reducer, 0);

store.subscribe(() => {
  console.log("Estado mudou", store.getState());
})

store.dispatch({type: 'INC', payload:3});
store.dispatch({type: 'INC', payload:3});
store.dispatch({type: 'INC', payload:3});
store.dispatch({type: 'DESC', payload:3});

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
