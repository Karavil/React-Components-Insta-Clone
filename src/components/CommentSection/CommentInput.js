// You do not need to do anything in this file
import React, { useState } from 'react';

const CommentInput = props => {
   const [comment, setComment] = useState('');

   return (
      <form className="comment-form" onSubmit={(e) => {
         e.preventDefault();
         props.submitComment(comment);
      }}>
         <input
            type="text"
            placeholder="Add comment... "
            onChange={(event) => setComment(event.target.value)}
         />
      </form>
   );
};

export default CommentInput;
