import React, { useState } from "react";

const Form = ({submitTask}) => {

  const [userTask,setUserTask] = useState('');

  const formHandlingSubmit = () => {
    submitTask(userTask)
    setUserTask('')
  }

  return (
    <div>
      
      <div className="row mx-auto w-50">
        <h3 className="mb-4">React Todo List</h3>
        <div className="col">
          <input
            value={userTask}
            onChange={ e => setUserTask(e.target.value)}
            type="text"
            id="task"
            className="form-control"
            placeholder="Enter Tasks"
          />
        </div>
        <div className="col">
          <button  type="button" onClick={()=> formHandlingSubmit()} className="btn btn-primary">
            Add Tasks
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
