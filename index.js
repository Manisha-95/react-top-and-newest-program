import React, { Component } from 'react';
import { render } from 'react-dom';
import List from './list';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
    name: "Alfreds",
    votes:24,
    date: '2017-06-14 14:03:49'
  },{
    name: "Centro",
    votes:30,
    date: '2015-06-14 14:03:49'
  },{
    name: "Ernst",
    votes:20,
    date: '2014-06-14 14:03:49'
  },
  {
    name: "Island",
    votes:2,
    date: '2019-06-14 14:03:49'
  },
  {
    name: "Laughing",
    votes:39,
    date: '2020-08-14 14:03:49'
  },
  {
    name: "Magazzini",
    votes:94,
    date: '2018-06-14 14:03:49'
  },
  {
    name: "Alimentari",
    votes:10000,
    date: '2010-06-14 10:03:49'
  }]
    };
  }
 ascend=() =>{
      var clone=[...this.state.data];
      
      clone.sort((a,b)=>a.votes-b.votes);
      //console.log(clone);
      this.setState({data:clone});
      //  {
      //    this.setState({data:this.state.data.sort((a,b)=>a.votes-b.votes)})
      //  }
 }
 newest=()=>{
   var clone=[...this.state.data];
   //console.log(clone);
   clone.sort((a,b)=> new Date(a.date) - new Date(b.date)) 
   //console.log(clone);
   this.setState({data:clone});
 }
  render() {
    
    return (
      <div>
      <button onClick={()=>this.ascend()}>Top</button>
      <button onClick={()=>this.newest()}>Newest</button>
  
  <table>
    <tr>
    <th>Company</th>
    <th>Upvotes</th>
    <th>Last Seen</th>
    </tr> 
      {this.state.data.map(item =>
        <tr key={item.name}>
          <td>{item.name}</td>
          <td>{item.votes}</td>
          <td>{item.date}</td>
        </tr>
      )
      }
  </table>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
