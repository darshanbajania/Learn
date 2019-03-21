import React from 'react';
import {Link} from 'react-router-dom';
import homeImage from '../homeImage.png';
import './NavigationBar.css';


const NavigationBar = ({isHome,onClickclass11}) => {

    return (
        <div>
            <nav className='pa1 shadow-2 tl '>
        <Link to="/"><img onClick={()=>{
            isHome('false')
        }}
        className=""   
        alt="logo" 
        style={{width :"40px", height:"auto"}} 
        src={homeImage}
        >
      </img>
      </Link>
      
      <div className="ma cont" style={{float:"right"}}>
        <button onClick={() =>{
         onClickclass11('on');
         
        }}
           className="pa2  dim black button3 helvetica ">class 11</button>
        <button className="pa2 dim button3  helvetica"> class 12</button>
      </div>  
      
      </nav>

        </div>
    );
}

export default NavigationBar;