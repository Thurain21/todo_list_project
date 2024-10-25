import React from "react";
import Cart from "./Cart";

const List = ({tasks}) => {
  return (
    <div>
      <div className="w-50 mx-auto">
        <ol className="list-group mt-3">
          <Cart data={tasks}/>
        </ol>
      </div>
    </div>
  );
};

export default List;
