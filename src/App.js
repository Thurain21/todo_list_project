import React, { useEffect, useState } from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import List from "./components/List";
import Form from "./components/Form";
import { apidata } from "./api/apiResource";
const { v4: uuidv4 } = require("uuid");

const App = () => {
  const [task, setTask] = useState([]);
  const fetchdata = async () => {
    const reqdata = await apidata.get("/todolist");

    setTask(reqdata.data);
  };

  useEffect(() => {
    fetchdata();
  }, [task]);

  const submitTask = async (userTask) => {
    const postdata = {
      id: uuidv4(),
      task: userTask,
      complete: false,
    };

    await apidata.post("todolist", postdata);

  };

  const deleteTask = async(task_id) => {
    
    await apidata.delete(`todolist/${task_id}`)

  }
    
    
  

  return (
    <div className="mt-5">
      <Form submitTask={submitTask} />
      <List tasks={task} deleteTask={deleteTask}/>
    </div>
  );
}

export default App;
