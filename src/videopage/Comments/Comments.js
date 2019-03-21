import React from 'react';
import Remarkable from 'remarkable';

   
const CommentBox = ({author,children}) => {
   
 const rawMarkup=() => {
        let md = new Remarkable();
        let rawMarkup = md.render(children.toString());
        return { __html: rawMarkup };
    }
    
           return (
        <div className="comment">
        <h2 className="commentAuthor">
          {author}
        </h2>
        <span dangerouslySetInnerHTML={rawMarkup()} />
      </div>
       
    );

    
 
}
export default CommentBox;