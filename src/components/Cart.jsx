import React from "react";

const Cart = ({ tasks,deleteTask,updateTask }) => {

  

   return (
    <div>
        {
          tasks.map((task) => (
            <li key={task.id} className = {task.complete == true ? "list-group-item  shadow bg-success p-3 mb-2 rounded " : "list-group-item shadow p-3 mb-2 rounded bg-info "}>
          <div className="row ">
            <div className="col-11"><input type="checkbox" onChange={() => updateTask(task.id, !task.complete)} checked={task.complete} />{task.task}</div>
            <div className="col-1">
              <i className="fa-solid fa-trash" onClick={() => deleteTask(task.id)}></i>
            </div>
          </div>
        </li>
          ))
        }
    </div>
  );
}

export default Cart;
