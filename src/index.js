import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

const initialStates = {count:40, title:'Teste'};

function reducer(state = initialStates, action){
  if(action.type === 'INCREMENT'){
    return {count:state.count + 1, title:state.title};
  }
  else if(action.type === 'ALTERAR_TITULO'){
    axios.get('https://my-json-server.typicode.com/typicode/demo/posts').then((response) => {
      store.dispatch({type: 'TITULO_ALTERADO',title:response.data[0].title});
    });
  }
  else if(action.type === 'TITULO_ALTERADO'){
   return {count:state.count, title:action.title}; 
  }
  console.log(action);
  return state;
}

const store = createStore(reducer);

//store.dispatch({'type': 'INCREMENT','count':90});

const App = () =>(
  <Provider store={store}>
    <Counter />
  </Provider>
  
);

ReactDOM.render(<App />,document.getElementById('root'));
