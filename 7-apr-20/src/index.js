import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Component lifecyle  methods example
 */

class Hello extends React.Component{
  
  constructor(){
    super();
    console.log("Constructor Invoked");
    this.udpateMe=this.udpateMe.bind(this);
    this.state={count:1}
  }

  componentDidMount(){
    console.log("componentDidMount");
  } 

  componentDidUpdate(){
    console.log("componentDidUpdate");
  }

  componentWillUpdate(){
    console.log("componentWillUpdate");
  }
  
  udpateMe(){
    let c=this.state.count+1;
    this.setState(state=>({
      count:c
    }));
    console.log(this.state);
  }

  
 
  render(){
    return (<div>
      <h1>Hello</h1>
      <button onClick={this.udpateMe}>{this.state.count} Update</button> 
      </div>)
  }
}


ReactDOM.render(
  <Hello></Hello>,
  document.getElementById('root')
);
