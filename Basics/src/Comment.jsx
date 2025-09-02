import React, { useState } from 'react'
import CommentsForm from './CommentsForm';
import "./Comment.css";

const Comment = () => {
    let [comments,setComments] = useState([{
        userName:"",
        reMark:"",
        rating:""
    }])

    

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments,comment])
        console.log("running")
    }

  return (
    <div>
      <h2>All Comments</h2>
      {comments.map((comment, idx) => (
        <div className="comment" key={idx} >
            <span>{comment.userName}</span>
            <br />
            <br />
            <span>{comment.reMark}</span>
            &nbsp; &nbsp;
            <span>{comment.rating}</span>
        </div>
      ))}
      <CommentsForm addNewComment = {addNewComment}></CommentsForm>
    </div>
  )
}

export default Comment
