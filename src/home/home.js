import React from 'react';
import Learn1 from './Learn1.jpg';
import Textbox from '../Textbox';
import './home.css';



const Home = ({ CourseSearch,OnSearch }) => {
    return (
        <div className="tc  ">
        
                    
            
          <div 
          style={{height:235}}
   
          className='flex justify-center  tc '>
   <img  className='positioning pv3  '
                alt="logo" 
                src={Learn1} 
                width="420" 
                height="200">
                </img>
                

          </div>
         
                <Textbox    CourseSearch1={CourseSearch} OnSearch1={OnSearch} className="tc"/>
                
                <button className='tc ma4 button1'
                bsstyle="link"
                style={{width:150,height:50}}
                >Explore</button>
        
 
        </div>
   );

}
export default Home;