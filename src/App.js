import logo from './logo.svg';
import './App.css';
import DisplayStateJSON from './DisplayStateJSON.js';
import TodosDisplay from './TodosDisplay.js';

import { useState } from 'react';

const initialState = {
  todos: [
    { text: 'Write angry blog post about git', completed: false, id: 1 },
    { text: 'Write angry blog post about react', completed: false, id: 2 }
  ], // this is the most important datapoint
  loggedIn: false,
};

const copyArray = (array) => {
  return array.slice();
};

function App() {

  const [state, setState] = useState(initialState);

  const handleCompletedToggle = (index) => {

    const copiedArray = copyArray(state.todos);
    copiedArray[index].completed = !copiedArray[index].completed

    setState({ todos: copiedArray });
  };

  return (
    <div className="App">
      <div className="column columnOne">
        <DisplayStateJSON data={state} />
      </div>
      <div className="column columnTwo">
        <TodosDisplay todos={state.todos} handleCompletedToggle={handleCompletedToggle} />
      </div>
    </div>
  );
}

export default App;
