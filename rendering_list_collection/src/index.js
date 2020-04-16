import React from 'react';
import ReactDOM from 'react-dom';

class User extends React.Component{
  render(){
  return <li>{this.props.name}</li>
  }
}

class ListOfUsers extends React.Component{
  users=[{name:"Bob"},{name:"Joe"},{name:"Awr"},{name:"kaUwo"},{name:"Koqzs"}];

  redneredUsers=this.users.map((itm)=><User name={itm.name} key={itm.name}/>);
  
  render(){
    return(
      <div>
        <h1>Users Of system</h1>
    <ol>{this.redneredUsers}</ol>
      </div>
    )
  }
}

ReactDOM.render(
  <ListOfUsers/>,
  document.getElementById('root')
);
