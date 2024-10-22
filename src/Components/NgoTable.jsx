import React, { useEffect, useState } from 'react';
import axios from 'axios'
import NgoUser from './NgoUser';

const NgoTable = () => {
    const [user, SetUser] = useState([])

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>SetUser(res.data))
         
        
    })
  

  return (
   
    <table className="table table-striped">
        
      <thead>
        <tr>
          <th scope="col">Sr.No</th>
          <th scope="col">NGO Name</th>
          <th scope="col">Total Donation Amount</th>
        </tr>
      </thead>
      <tbody>
        {user.map((stat, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th> 
            <td>{stat.name}</td>
            <td>{stat.email}</td>
            
            
          </tr>
        ))}
      </tbody>
    </table>
    

  );
};

export default NgoTable;
