import React from 'react';
import './List.css';
import Chapter from './Chapter.js';
import {topics} from './ListData.js';
import ChapterDetails from './ChapterDetails';





const List = ({value,onTopicVideo1}) => {

   
        
    return (
       
    <div>
         <div style={{height:"auto",width: "auto"}}   className="containers2 ma3  ba br4 ">
{

        value==='b'? <div> <Chapter 
        value1={value} onTopicVideo2={onTopicVideo1}
        key={topics[0].id}
        ID={topics[0].id}
          topic={topics[0].topic}
          chapter1={topics[0].chapter1} 
          chapter2={topics[0].chapter2}
          chapter3={topics[0].chapter3}></Chapter> <ChapterDetails id={topics[0].id} ></ChapterDetails></div>   :  <Chapter 
      value1={value} onTopicVideo2={onTopicVideo1}
      key={topics[0].id}
      ID={topics[0].id}
        topic={topics[0].topic}
        chapter1={topics[0].chapter1} 
        chapter2={topics[0].chapter2}
        chapter3={topics[0].chapter3}></Chapter>
      }</div>
     
     <div style={{height:"auto",width: "auto"}}   className="containers2 ma3  ba br4 ">
{

        value==='c'? <div> <Chapter 
        value1={value} onTopicVideo2={onTopicVideo1}
        key={topics[1].id}
        ID={topics[1].id}
          topic={topics[1].topic}
          chapter1={topics[1].chapter1} 
          chapter2={topics[1].chapter2}
          chapter3={topics[1].chapter3}></Chapter> <ChapterDetails></ChapterDetails></div>   :  <Chapter 
      value1={value} onTopicVideo2={onTopicVideo1}
      key={topics[1].id}
      ID={topics[1].id}
        topic={topics[1].topic}
        chapter1={topics[1].chapter1} 
        chapter2={topics[1].chapter2}
        chapter3={topics[1].chapter3}></Chapter>
      }</div>
        
        <div style={{height:"auto",width: "auto"}}   className="containers2 ma3  ba br4 ">
{

        value==='d'? <div> <Chapter 
        value1={value} onTopicVideo2={onTopicVideo1}
        key={topics[2].id}
        ID={topics[2].id}
          topic={topics[2].topic}
          chapter1={topics[2].chapter1} 
          chapter2={topics[2].chapter2}
          chapter3={topics[2].chapter3}></Chapter> <ChapterDetails></ChapterDetails></div>   :  <Chapter 
      value1={value} onTopicVideo2={onTopicVideo1}
      key={topics[2].id}
      ID={topics[2].id}
        topic={topics[2].topic}
        chapter1={topics[2].chapter1} 
        chapter2={topics[2].chapter2}
        chapter3={topics[2].chapter3}></Chapter>
      }</div>
        
    </div>

    
    );

}
export default List;