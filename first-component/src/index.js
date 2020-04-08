import React from 'react';
import ReactDOM from 'react-dom';

function Hi(){

  let myJSX=(<button> Hi Compontent </button>);
  return myJSX;
}

class Hello extends React.Component{
   message="Hello "+this.props.children;
  render(){
    return (<h1>{this.message}</h1>);
  }
}


let output=(<div><Hi></Hi><Hello myName="Hemraj"> This is test</Hello></div>);

ReactDOM.render(
  output,
  document.getElementById('root')
);
