
import React, {Component} from 'react';

class Header extends Component{
    render(){
        return <h1>Header Part</h1>
    }
}

class Content extends Component{
    render(){
        return <p style={{color:this.props.textColor}}>Hi user, this is response from react.</p>
    }
}

class Body extends Component{
    render(){
        return <Content textColor={this.props.msgColor}></Content>
    }
}



class MainComponent extends Component{
    render(){
      return <div>
          <Header/>
          <Body msgColor="#0000FF"/>
      </div>
    }
}

export default MainComponent;