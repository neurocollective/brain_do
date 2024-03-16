import logo from './logo.svg';
import './App.css';
import DisplayStateJSON from './DisplayStateJSON.js';
import Todo from './Todo.js';

import { useState } from 'react';

const initialState = {
  todos: [], // this is the most important datapoint
  loggedIn: false,
};

function App() {

  const [state, setState] = useState(initialState);

  return (
    <div className="App">
      <div className="column columnOne">
        <DisplayStateJSON data={state} />
      </div>
      <div className="column columnTwo">
        <Todo />
      </div>
    </div>
  );
}

export default App;
