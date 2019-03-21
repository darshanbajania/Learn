import React from 'react';
import './List.css';
import cbse from './cbseLogo1.jpg';





const Chapter = ({ID,topic,chapter1,chapter2,chapter3,value1,onTopicVideo2}) => {


    return (
    
         <div >
{
    <div 
        className="containers1"    
          
            >
                <div 
                style={{height:70}} 
                className="chapter br pr5" >
                    <p>{topic}</p>
                </div>
   
                <div className="list1">
                <div onClick={()=>
                    {   if(ID===1){
                     return   onTopicVideo2('b');
                    }
                        else if(ID===2){
                        return    onTopicVideo2('c');
                        }
                        else if(ID===3){
                            return onTopicVideo2('d');
                        }
                        }}  className="list pointer">
                    <img alt="cbselogo"
                    style={{height:25,width:25}} 
                    src={cbse}>
                    </img>
                  <p>{chapter1}</p>
                    </div>
                    
  
                <div onClick={()=>
                    {   if(ID===1){
                     return   onTopicVideo2('b');
                    }
                        else if(ID===2){
                        return    onTopicVideo2('c');
                        }
                        else if(ID===3){
                            return onTopicVideo2('d');
                        }
                        }}
                className="list pointer">
                <img alt="cbselogo" style={{height:25,width:25}} src={cbse}></img>
                   
                    <p  >{chapter2}</p>
               
                </div>
                
                
                <div onClick={()=>
                    {   if(ID===1){
                     return   onTopicVideo2('b');
                    }
                        else if(ID===2){
                        return    onTopicVideo2('c');
                        }
                        else if(ID===3){
                            return onTopicVideo2('d');
                        }
                        }} 
                 className="list pointer">
                <img alt="cbselogo" style={{height:25,width:25}} src={cbse}></img>
                <p >{chapter3}</p></div>
        </div>
          
    </div>
    
} 

    
     
     
    
    
       </div>
       
     
    );

}
export default Chapter;