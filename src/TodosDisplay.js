const handleCompletedToggle = () => {

}

const TodosDisplay = (props) => {
  const { todos } = props;

    return (
      <ul>
        {todos.map((todo, index) => {
          return (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => props.handleCompletedToggle(index)}
              />
              <span>{todo.text}</span>
            </li>
          );
        })}
      </ul>
    );
  };

export default TodosDisplay;
