import React from 'react';
import ReactDOM from 'react-dom';

class Message extends React.Component{
  render(){
    return(
      ReactDOM.createPortal(<h1>Welcome User</h1>,document.getElementById("welcome_msg"))
    )
  }
}

class HelloMessage extends React.Component{
  render(){ return <h2>Hello</h2>}
}

ReactDOM.render(
  [<Message/>,<HelloMessage/>],
  document.getElementById('root')
);

