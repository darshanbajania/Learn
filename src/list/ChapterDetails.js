import React from 'react';
import ReactPlayer from 'react-player';
import './List.css';
import cbse from './cbseLogo1.jpg';
import {videoLectures} from './ListData2.js';





const ChapterDetails =({id}) =>{

const test=(value) =>{
return value=id
}
    const array = videoLectures.filter(test);
     
    console.log('arraay',array);

return(
    <div>
     <div>
       
           <div style={{height:"auto", width :"auto"}} className="boxCover ma2 bt">

      <div className="box2 pa1 ma1 br" style={{height:200,width:300}}>
      <ReactPlayer
        className="box2  react-player__preview"
        url='https://www.youtube.com/watch?v=NNqLB7znMLU'
        width="100%"
        height="100%"
        light ={cbse}
        controls 
        playing 
       />
        <p>Preview</p>

    </div>

     <div className="box3" > 
     
    <div className="list pointer">
                    <img alt="cbselogo"
                    style={{height:25,width:25}} 
                    src={cbse}>
                    </img>
                <p> sdfgsf </p>  
                 
                
               
                </div>      
                              {
                videoLectures[1].map((user,i) =>{
                    return        <p
                    key={videoLectures[0][i].id}
                     >{ videoLectures[0][i].name}</p>
                    })
            }
    </div>
    </div>
 

    </div>
    </div>
);


}
export default ChapterDetails;