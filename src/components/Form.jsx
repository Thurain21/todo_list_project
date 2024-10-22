import React from "react";

const Form = () => {
  return (
    <div>
      
      <div className="row mx-auto w-50">
        <h3 className="mb-4">React Todo List</h3>
        <div className="col">
          <input
            type="text"
            className="form-control"
            placeholder="Enter Tasks"
          />
        </div>
        <div className="col">
          <button className="btn btn-primary">
            Add Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
