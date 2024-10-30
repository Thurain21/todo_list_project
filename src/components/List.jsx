import React from "react";
import Cart from "./Cart";

const List = ({tasks , deleteTask ,updateTask}) => {
  return (
    <div>
      <div className="w-50 mx-auto mt-3">
        <ol className="list-group ">
          <Cart tasks={tasks} deleteTask={deleteTask} updateTask = {updateTask}/>
        </ol>
      </div>
    </div>
  );
};

export default List;
