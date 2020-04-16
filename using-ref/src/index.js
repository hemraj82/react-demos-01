//Using element reference
import React from 'react';
import ReactDOM from 'react-dom';

class Adder extends React.Component{

  add=()=>{
    this._element3.value=parseInt(this._element1.value)+parseInt(this._element2.value);
  }

  render(){
    var thisRef=this;
    return(
        <div>
          <input type="text" ref={function(el){thisRef._element1=el}}/>
          <input type="text" ref={function(el){thisRef._element2=el}}/>
          <input type="text" ref={function(el){thisRef._element3=el}}/>
          <button onClick={this.add}>Add Now</button>
        </div>
    )
  }
}

ReactDOM.render(
  <Adder/>,
  document.getElementById('root')
);
