import React, {Component} from 'react';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import {datab} from './CommentData.js';

class CommentBox extends Component {
   
  
constructor(){
  super();
    this.state ={
               data:'',

                }
              }

  

  


   // loadCommentsFromServer=()=>{
  
  
  
//     console.log(datab[0]);
//     fetch(datab[0])
//     .then(users => this.setState({ data: users}))
//  console.log(this.state.data)
// $.ajax({
//           url: this.props.url,
//           dataType: 'json',
//           cache: false,
//           success: function(data) {
//             this.setState({data: data});
//           }.bind(this),
//           error: function(xhr, status, err) {
//             console.error(this.props.url, status, err.toString());
//           }.bind(this)
//         });
//     }
     
    //  getInitialState(){
    //     return {data: []};
    //   }
// componentDidMount() {
//         this.loadCommentsFromServer();
//         setInterval(this.loadCommentsFromServer,   this.props.pollInterval);
//       }
   
   
   
   
   
   render() {
         return (
        <div className="commentBox">
            <h1>my comment box</h1>
        <CommentList data={this.state.data}/>
        <CommentForm/>
      </div>
       
    );

   }
  }


export default CommentBox;