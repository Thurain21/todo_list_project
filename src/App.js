import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import List from './components/List';
import Form from './components/Form';

const App = () => {
  return (
    <div className='mt-5'>
      <Form/>
        <List/>
    </div>
  )
}

export default App