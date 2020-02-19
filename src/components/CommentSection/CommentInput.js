// You do not need to do anything in this file
import React, { useState } from 'react';

const CommentInput = props => {
   const [comment, setComment] = useState('');

   const submitComment = (e) => {
      e.preventDefault();
      props.submitComment(comment);
   }

   const commentChange = (e) => {
      setComment(e.target.value);
   }

   return (
      <form className="comment-form" onSubmit={submitComment}>
         <input
            type="text"
            placeholder="Add comment... "
            onChange={commentChange}
         />
      </form>
   );
};

export default CommentInput;
