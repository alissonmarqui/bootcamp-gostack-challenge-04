import React from 'react';

function Comment({data}) {
  return(
    <div className="comment">
      <img src={data.author.avatar} />
      <p>
        <strong>{data.author.name}: </strong>
        <span>{data.content}</span>
      </p>
    </div>
  );
}

export default Comment;