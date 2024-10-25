import React, { useEffect, useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Form from './components/Form';
import { apidata } from './api/apiResource';

const App = () => {

    const [task , setTask] = useState([]);
    const fetchdata = async() => {
        const data = await apidata.get('/todolist');

        setTask(data);
        
    } 

    useEffect(()=>{
      fetchdata()
    },[])

    console.log(task);
    

  return (
    <div className='mt-5'>
      <Form/>
        <List tasks={task}/>
    </div>
  )
}

export default App