const CreateTodo = (props) => {
    const { text, handleType, create } = props;
  
    return (
      <div className="">
        <input type="text" value={text} onChange={handleType} />
        <button onClick={create}>Add</button>
      </div>
    );
  };

export default CreateTodo;
