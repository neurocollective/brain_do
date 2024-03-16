const TodosDisplay = (props) => {
  const { todos } = props;


    return (
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
              />
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    );
  };

export default TodosDisplay;
