import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Counter from './Counter';

const initialStates = {count:40, title:'Teste'};

function reducer(state = initialStates, action){
  return state;
}

const store = createStore(reducer);

const App = () =>(
  <Provider store={store}>
    <Counter />
  </Provider>
  
);

ReactDOM.render(<App />,document.getElementById('root'));
