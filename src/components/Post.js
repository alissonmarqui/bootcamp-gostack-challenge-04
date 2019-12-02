import React from 'react';

import Comment from './Comment';

function Post({ data }) {
  return(
    <div className="post">
      <div className="author">
        <img src={data.author.avatar} />
        <div className="info">
          <strong>{data.author.name}</strong>
          <span>{data.date}</span>
        </div>        
      </div>  
      <p className="content">{data.content}</p>    

      <hr />
            
      {
        data.comments.map(comment => <Comment key={comment.id} data={comment} />)
      }
    </div>
  );
}

export default Post;