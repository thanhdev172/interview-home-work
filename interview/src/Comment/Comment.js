import React from "react";
import "./Comment.css";
//lay dc id cua bai post dô đây duyệt lọc ra
class Comment extends React.Component {
  render() {
    return (
      <>
        {this.props.comments.map((comment) => {
          if (comment.postId === this.props.postId)
            return (
              <div className="comments" key={comment.id}>
                <a className="comment__avatar">
                  <img src="https://cdn.pixabay.com/photo/2018/08/28/12/41/avatar-3637425__480.png" />
                </a>
                <div className="comment-info">
                  <div className="comment-info__name">
                    {comment.name} <span>a day ago</span>
                  </div>
                  <p className="comment-info__content">{comment.body}</p>
                  <div className="comment-info__reply">Reply to</div>
                </div>
              </div>
            );
        })}
      </>
    );
  }
}

export default Comment;
