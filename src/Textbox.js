import React from 'react';
import searchButn from './searchButn.png';
import './Textbox.css';



const Textbox= ({CourseSearch1,OnSearch1}) =>
{  return(
    <div className=" boxInput ">
       <div
    
       className="box11 "> 
            <input 
            className=' box12 shadow-5 ba b--light-gray  ' 
            type='search'
            placeholder='search'
            onChange={CourseSearch1}> 

         </input ></div>
       
         
          <img 
              className="pointer shadow-5 "
              alt="seach button" 
              src={searchButn} 
              onClick={OnSearch1}
              width="60" 
              height="60">
          </img>
          
         
        
          
             

    </div>
   
);

}
export default Textbox;