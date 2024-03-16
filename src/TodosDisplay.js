const Todo = (props) => {

  const { data, index, onChange, handleDeleteTodo } = props; // data -> `{ completed, text }`

  let textClass = '';

  if (data.completed) {
    textClass = 'strikethrough';
  }

  return (
    <li key={data.id}>
      <input
        type="checkbox"
        checked={data.completed}
        onChange={() => onChange(index)}
      />
      <span className={textClass}>{data.text}</span>
      &nbsp;
      &nbsp;
      <span className="show-on-hover" onClick={() => handleDeleteTodo(index)}>X</span>
    </li>
  );
};

const TodosDisplay = (props) => {
  const { todos, handleDeleteTodo, handleCompletedToggle } = props;

    return (
      <ul className="todo-container">
        {todos.map((todo, index) => {
          return <Todo
            key={todo.id}
            onChange={handleCompletedToggle}
            data={todo}
            index={index}
            handleDeleteTodo={handleDeleteTodo}
          />
        })}
      </ul>
    );
  };

export default TodosDisplay;
