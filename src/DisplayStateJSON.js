const DisplayStateJSON = (props) => {
    const { data } = props;
  
    return (
      <div>
        {JSON.stringify(data, null, 2)}
      </div>
    );
  };

export default DisplayStateJSON;
