import React, { useEffect, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Form from './components/Form';
import { apidata } from './api/apiResource';

const App = () => {

    const [task , setTask] = useState([]);
    const fetchdata = async() => {
        const reqdata = await apidata.get('/todolist');

        setTask(reqdata.data)
        
        
    } 

    useEffect(()=>{
      fetchdata()
    },[])
    
    const submitTask = async(userTask) =>{
      
      const postdata = {
        id : 232,
        task : userTask,
        complete : false
      }

      const res = await apidata.post('todolist',postdata)

      console.log(...task,res.data);
      
      
    }

  return (
    <div className='mt-5'>
      <Form submitTask={submitTask}/>
        <List tasks={task}/>
    </div>
  )
}

export default App