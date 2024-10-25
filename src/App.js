import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Form from './components/Form';
import { apidata } from './api/apiResource';

const App = () => {

    const fetchdata = async() => {
        const data = await apidata.create('/todolist');

        console.log(data);
        
    } 

  return (
    <div className='mt-5'>
      <Form/>
        <List/>
    </div>
  )
}

export default App