import React,{Component} from 'react';
import './Biology.css';
import Textbox from '../../Textbox';
import BiologyLogo from '../../Logos/BiologyLogo.png';
import List from '../../list/List' ;



class Biology extends Component {
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
           <div  className="containersB ">
 
             <div className="tc container3">
              
                    <img className="image1 tc" alt="logo" src={BiologyLogo}/>
       
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
export default Biology;