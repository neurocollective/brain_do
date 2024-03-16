import logo from './logo.svg';
import './App.css';
import DisplayStateJSON from './DisplayStateJSON.js';
import TodosDisplay from './TodosDisplay.js';
import CreateTodo from './CreateTodo.js'

import { useState } from 'react';

const initialState = {
  todos: [
    { text: 'Write angry blog post about git', completed: false, id: 1 },
    { text: 'Write angry blog post about react', completed: false, id: 2 }
  ], // this is the most important datapoint
  loggedIn: false,
  currentText: '',
};

const copyArray = (array) => {
  return array.slice();
};

const copyObject = (state) => {
  return JSON.parse(JSON.stringify(state));
};

const getNextId = (todos) => {
  const id = todos[todos.length - 1].id;

  return id + 1;
};

function App() {

  const [state, setState] = useState(initialState);

  const handleCompletedToggle = (index) => {

    const copiedArray = copyArray(state.todos);
    copiedArray[index].completed = !copiedArray[index].completed

    setState({ todos: copiedArray });
  };

  const handleType = (event) => {
    console.log(event.target.value);

    const copiedState = copyObject(state);

    copiedState.currentText = event.target.value;

    setState(copiedState);
  };

  const createNewTodo = () => {
    const copiedState = copyObject(state);

    const { currentText } = copiedState;
    const nextId = getNextId(state.todos);

    copiedState.todos.push({ text: currentText, completed: false, id: nextId });

    copiedState.currentText = '';

    setState(copiedState);
  };

  return (
    <div className="App">
      <div className="column columnOne">
        <DisplayStateJSON data={state} />
      </div>
      <div className="column columnTwo">
        <CreateTodo text={state.currentText} handleType={handleType} create={createNewTodo} />
        <TodosDisplay todos={state.todos} handleCompletedToggle={handleCompletedToggle} />
      </div>
    </div>
  );
}

export default App;
