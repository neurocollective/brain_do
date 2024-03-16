import logo from './logo.svg';
import './App.css';
import DisplayStateJSON from './DisplayStateJSON.js';
import TodosDisplay from './TodosDisplay.js';

import { useState } from 'react';

const initialState = {
  todos: [
    { text: 'Write angry blog post about git', completed: false, id: 1 }
  ], // this is the most important datapoint
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
        <TodosDisplay todos={state.todos} />
      </div>
    </div>
  );
}

export default App;
