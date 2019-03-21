import React from 'react';
import ReactPlayer from 'react-player';
import './VideoPage.css';
import CommentBox from './Comments/CommentBox';


const VideoPage = () => {
    return (
        <div>
         <div className="tc pa2 ma3">
            <ReactPlayer
        className="box2  react-player__preview"
        url=''
        width="60%"
        height="300px"
        controls 
        playing 
       />

        </div>
        <div className="ma4">

<ul className="NavBox" >

  <li className="br pointer" ><p >Q AND A</p></li>
  <li className="pointer"><p >Comments</p></li>
</ul>      

        </div>
<div>
    <CommentBox url='./CommList' pollInterval={5000} ></CommentBox>
</div>
        </div>
       
    );

}
export default VideoPage;