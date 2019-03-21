import React from 'react';
import './Menu.css';
import phylogo from '../Logos/phylogo.png';
import {Link,Route} from 'react-router-dom';
import Physics from '../Subjects/Physics/Physics.js';
import ChemistryLogo from '../Logos/ChemistryLogo.png';
import BiologyLogo from '../Logos/BiologyLogo.png';
import MathsLogo from '../Logos/MathsLogo.png';
import Chemistry from '../Subjects/Chemistry/Chemistry.js';
import Biology from '../Subjects/Biology/Biology.js';
import Maths from '../Subjects/Maths/Maths.js';


const Menu = ({onClickclass11,isHome}) => {
    return (
       
    <div className="aboveit">
 <div onMouseLeave={() =>onClickclass11('off')} onClick={()=>isHome('true')}  className="box" >

         <Link 
    to="/Chemistry">    
    <img  className=" ma3 box1" height="60px" alt="chemistry" src={ChemistryLogo} ></img>
    </Link>
    <Link 
    to="/Physics">   
     <img className="ma3 box1" height="60px" alt="physics" src={phylogo} ></img>
    </Link>

    <Link 
    to="/Biology">
        <img className="ma3 box1" height="60px" alt="biology" src={BiologyLogo} ></img>
        </Link>
        <Link 
    to="/Maths"> 
        <img className="ma3 box1" height="60px" alt="maths" src={MathsLogo} ></img>
        </Link>
 </div>

 <Route path="/Chemistry" component={Chemistry}></Route>
 <Route path="/Physics" component={Physics}></Route>
 <Route path="/Biology" component={Biology}></Route>
 <Route path="/Maths" component={Maths}></Route>


    </div>
    
    ); 

}
export default Menu;