import React from 'react';
import ReactDOM from 'react-dom';

class Message1 extends React.Component{
  render(){
    return <p>Message One</p>
  }
}

class Message2 extends React.Component{
  render(){
    return <p>Message Two</p>
  }
}


ReactDOM.render(
  <React.Fragment>
    <Message1/>
    <Message2/>
  </React.Fragment>
  ,
  document.getElementById('root')
);
