const Todo = (props) => {

  const { data, index, onChange } = props; // data -> `{ completed, text }`

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
    </li>
  );
};

const TodosDisplay = (props) => {
  const { todos } = props;

    return (
      <ul className="todo-container">
        {todos.map((todo, index) => {
          return <Todo key={todo.id} onChange={props.handleCompletedToggle} data={todo} index={index} />
        })}
      </ul>
    );
  };

export default TodosDisplay;
