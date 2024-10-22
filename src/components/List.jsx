import React from "react";
import Form from "./Form";

const List = () => {
  return (
    <div>
      <Form />
      <div className="w-50 mx-auto">
        <ol className="list-group mt-3">
          <li className="list-group-item mt-4 shadow p-3 mb-5 bg-body rounded">
          <div className="row ">
          <div className="col-11">Tasks Message</div>
              <div className="col-1"><i class="fa-solid fa-trash"></i></div>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default List;
