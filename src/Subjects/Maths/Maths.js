import React,{Component} from 'react';
import './Maths.css';
import Textbox from '../../Textbox';
import MathsLogo from '../../Logos/MathsLogo.png';
import List from '../../list/List' ;



class Maths extends Component {
    constructor(){
        super();
        this.state={
            toggleit:'a'
        }}

onTopicVideo1 = (values) => {
         this.setState({toggleit : values});
        console.log('physics',values);
          }
           
    
    render(){
         return (
       <div>   
           <div  className="containersM ">
 
             <div className="tc container3">
              
                    <img className="image1 tc" alt="logo" src={MathsLogo}/>
       
                </div>  
        
            <div style={{position:"relative",top:220}} >
        
                <Textbox   className="container2"></Textbox>
             </div>
    
            </div>

            <List onTopicVideo1={this.onTopicVideo1} value={this.state.toggleit}></List>
             

</div>      
 
    );
    }
   

}
export default Maths;