import React from 'react';
import Comment from './Comments.js';
import {datab} from'./CommentData.js';
const CommentList = () => {
 

  const  commentNodes  = datab.map((comment)=> {
            return (
              <Comment author={comment.author} key={comment.id}>
                {comment.text}
              </Comment>
            );});
   return (
        <div className="commentList">
        {commentNodes}
      </div>
       
    );

}
export default CommentList;