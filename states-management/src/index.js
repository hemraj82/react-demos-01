import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class MyComponent extends Component{

  constructor(props){
    super(props)
    this.state={val1:0,val2:0, val3:0}
  }


  valueUpdated1=(e)=>{
    let newVal=e.target.value;
    this.setState(function(state,props){
      console.log(state.val1);
      return {val1:newVal,}
    });
    this.add();
  }


  valueUpdated2=(e)=>{
    this.setState({
      val2:e.target.value,
    });
    this.add();
  }

  add=()=>{
    this.setState({
      val3:parseInt(this.state.val1)+parseInt(this.state.val2)
    });
  }


  /*add=()=>{
    this.setState(function(state,props){
      return {val3:parseInt(state.val1)+parseInt(state.val2)}
    });
  }*/

  render(){
    return (
    <div>
        <input onChange={this.valueUpdated1} type="text"></input>
        <input onChange={this.valueUpdated2} type="text"></input>
        <input type="text" defaultValue={this.state.val3} value={this.state.val3}></input>
    </div>
    )
  }
}

ReactDOM.render(
    <MyComponent/>,
    document.getElementById('root')
  );
  