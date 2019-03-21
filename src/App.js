import React, { Component } from 'react';     
import Home from './home/home.js';            
import 'tachyons';
import 'react-bootstrap';
import './App.css';
import Menu from './menu/Menu.js';
import {Route} from 'react-router-dom';
import NavigationBar from './Navigation/NavigationBar.js';


 class App extends Component {  //STATEFULL COMPONENT

constructor(){
  super();
    this.state ={
                  route:'b',
                  physicshp: '',
                  class11:'',
                  homePage:'false',
                  TopicList:'a',
                  TopicValue:''

                }
              }

onTopicClick =(value)=>{                        

  console.log('hello');

}
isHome=(value)=>{
  this.setState({homePage:value})
}
onTopicVideo = (value,value2) =>{                //not used
  this.setState({TopicList : value});
  this.setState({TopicValue : value2});
}

CourseSearch = (event) => {                     //not used
  console.log(event.target.value);
 }


HomeLogo =(route) =>{    //not used
  this.setState({route : route})
}

onClickclass11 = (value) =>{      
  if(this.state.homePage==='false'){
     if(value==='off')
 {
  
  this.setState({class11 : value});
}
 else
 this.setState({class11 : 'on'});
}
else this.setState({class11:'on'})
  }             


render() {
  return ( 
    <div  className="tc">
      
      
      <NavigationBar isHome={this.isHome} onClickclass11={this.onClickclass11}></NavigationBar>
       {
         this.state.class11 === 'on'?
       <Menu isHome={this.isHome}  onClickclass11={this.onClickclass11}></Menu> 
        ://<Home CourseSearch ={this.CourseSearch} OnSearch={this.OnSearch} />
          <div style={{height:90}}></div>
      }
          
     <div className="">
           
            <Route path="/" exact component={Home}></Route>

      </div>
          
        
     </div> 
    );
  }
}  
          
export default App;
