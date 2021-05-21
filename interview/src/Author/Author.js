import React from "react";
const author = (props) => {
  let countComments = 0;
  props.comments.forEach((comment) => {
    if (comment.postId === props.postId) countComments++;
  });
  console.log(countComments);
  return <span>{countComments} replies</span>;
};
export default author;
