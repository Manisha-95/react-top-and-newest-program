import React from 'react';

const Data=(props)=>{
  //console.log(props.votes);
return <table>
<tr>
    <th>Company</th>
    <th>Upvotes</th>
    <th>Last Seen</th>

  </tr>
  
  <tr key={props.name}>
    <td>{props.name}</td>
    <td>{props.votes}</td>
    <td>{props.dates}</td>
   </tr>
</table>



}

export default Data;

