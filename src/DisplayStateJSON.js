const DisplayStateJSON = (props) => {
    const { data } = props;
  
    return (
      <div className="json-display-container">
        {JSON.stringify(data, null, 2)}
      </div>
    );
  };

export default DisplayStateJSON;
