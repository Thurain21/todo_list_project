import React from "react";

const Cart = ({ tasks }) => {

  

  return (
    <div>
        {
          tasks.map((task) => (
            <li key={task.id} className="list-group-item shadow p-3 mb-2 bg-body rounded">
          <div className="row ">
            <div className="col-11">{task.task}</div>
            <div className="col-1">
              <i className="fa-solid fa-trash"></i>
            </div>
          </div>
        </li>
          ))
        }
    </div>
  );
}

export default Cart;
