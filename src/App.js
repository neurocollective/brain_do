import logo from './logo.svg';
import './App.css';
import DisplayStateJSON from './DisplayStateJSON.js';
import TodosDisplay from './TodosDisplay.js';
import CreateTodo from './CreateTodo.js'

import { useState } from 'react';

const initialState = {
  todos: [
    // { text: 'Write angry blog post about git', completed: false, id: 1 },
    // { text: 'Write angry blog post about react', completed: false, id: 2 }
  ],
  currentText: '',
};

const copyArray = (array) => {
  return array.slice();
};

const copyObject = (state) => {
  return JSON.parse(JSON.stringify(state));
};

const getNextId = (todos) => {

  if (!todos.length) {
    return 1;
  }

  const id = todos[todos.length - 1].id;

  return id + 1;
};

function App() {

  const [state, setState] = useState(initialState);

  const handleCompletedToggle = (index) => {

    const copiedState = copyObject(state);

    const copiedArray = copiedState.todos;
    copiedArray[index].completed = !copiedArray[index].completed;

    setState(copiedState);
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

  const handleDeleteTodo = (indexToDelete) => {
    const copiedState = copyObject(state);

    copiedState.todos = copiedState.todos.filter((_, index) => index !== indexToDelete);

    // alternative to .filter w/ for loop ->
    // const newTodos = [];

    // for (let i = 0; i < state.todos.length; i++) {
    //   const theTodo = state.todos[i];

    //   if (i === indexToDelete) {
    //     continue;
    //   }
    //   newTodos.push(theTodo);
    // }

    // copiedState.todos = newTodos;

    setState(copiedState);
  };

  return (
    <div className="App">
      <div className="column columnOne">
        <DisplayStateJSON data={state} />
      </div>
      <div className="column columnTwo">
        <CreateTodo text={state.currentText} handleType={handleType} create={createNewTodo} />
        <TodosDisplay
          handleDeleteTodo={handleDeleteTodo}
          todos={state.todos}
          handleCompletedToggle={handleCompletedToggle}
        />
      </div>
    </div>
  );
}

export default App;
