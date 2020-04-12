import React from 'react';
import ReactDOM from 'react-dom';

class MyForm extends React.Component{

  constructor(props){
    super(props);
    this.state={
      val1:0,
      val2:0,
      val3:0
    }

    this.addValues=this.addValues.bind(this);
    this.setVal1=this.setVal1.bind(this);
    this.setVal2=this.setVal2.bind(this);
  }

  addValues=()=>{
    //this.state.val3=this.state.val1+this.state.val2;
    this.setState({
      val3:parseInt(this.state.val1)+parseInt(this.state.val2)
    });

  }

  setVal1(e){
    this.setState({
      val1:e.target.value,
    });
  }
  setVal2(e){
    this.setState({
      val2:e.target.value
    });
  }

  render(){
    return (
      <div>
        <input type="text" onChange={this.setVal1} placeholder="0"/><br/>
        <input type="text" onChange={this.setVal2} placeholder="0"/><hr/>
        <input type="text" value={this.state.val3}/><br/>
        <button onClick={this.addValues}>Add Number</button>
      </div>
    )

  }
}

class Calculator extends React.Component{
  render(){
    return (
    <div>
      <h1>My Calculator</h1> 
      <MyForm/>
    </div>
    )
  }
}

ReactDOM.render(<Calculator/>, document.getElementById("root"));

