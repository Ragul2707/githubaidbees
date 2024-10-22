import axios from 'axios'
import React, { useEffect, useState } from 'react'

const NgoUser = () => {
    const [dataa,SetDataa] = useState([]);
    
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res=>SetDataa(res.data))
    })
  return (
   <table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Sr.NO</th>
      <th scope="col">User Name</th>
      <th scope="col">Total Donation Amount</th>
      
    </tr>
  </thead>
  <tbody>
    
        {dataa.map((item, index) => (
          <tr key={index}>
            <th scope="row">{index + 1}</th> 
            <td>{item.company.name}</td>
            <td>{item.address.suite}</td>
          </tr>
        ))}
   </tbody>
</table>
  )
}

export default NgoUser