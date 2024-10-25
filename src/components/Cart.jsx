import React from 'react'

const Cart = ({data}) => {

    console.log(data);
    
  return (
    
    <div>
        <li className="list-group-item mt-4 shadow p-3 mb-5 bg-body rounded">
          <div className="row ">
          <div className="col-11">Tasks Message</div>
              <div className="col-1"><i className="fa-solid fa-trash"></i></div>
            </div>
          </li>
    </div>
  )
}

export default Cart