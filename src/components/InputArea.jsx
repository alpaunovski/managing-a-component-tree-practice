import React from "react";

// We modify the InputArea component to accept props from the parent component. The props in this case are the functions. After that, we access them as normal. We gave the props the same names as the parent functions.
function InputArea(props) {
  return (
    <div className="form">
      <input onChange={props.handleChange} type="text" value={props.inputText} />
      <button onClick={props.addItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
