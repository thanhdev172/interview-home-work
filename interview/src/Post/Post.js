import React from "react";
import "./Post.css";
import Button from "react-bootstrap/Button";
import Comment from "../Comment/Comment";
import Author from "../Author/Author";
const axios = require("axios");

class Post extends React.Component {
  state = {
    posts: [],
    users: [],
    comments: [],
    showComments: false,
  };

  toggle(index) {
    if (this.state.showComments === index) {
      return this.setState({ showComments: null });
    }
    this.setState({ showComments: index });
  }

  getPosts = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        this.setState({
          posts: response.data,
        });
      });
  };

  getUsers = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        this.setState({
          users: response.data,
        });
      });
  };

  getComments = async () => {
    await axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        console.log("comments", response.data);
        this.setState({
          comments: response.data,
        });
      });
  };
  componentDidMount() {
    this.getPosts();
    this.getUsers();
    this.getComments();
  }

  render() {
    let { posts, users, comments } = this.state;

    return (
      <>
        {posts.map((post, index) => {
          return (
            <div className="post" key={post.id}>
              <h1 className="post__title">{post.title}</h1>
              <div className="info">
                <div className="info__post">
                  {users.map((user) => {
                    if (user.id === post.userId) {
                      return <div className="author">Author: {user.name}</div>;
                    }
                  })}
                  <div className="date">Created at: Sep 20, 2018</div>
                </div>
                <div className="info__tag">
                  <Button variant="outline-primary">Primary</Button>{" "}
                  <Button variant="outline-secondary">Secondary</Button>{" "}
                  <Button variant="outline-success">Success</Button>{" "}
                  <Button variant="outline-warning">Warning</Button>{" "}
                  <Button variant="outline-danger">Danger</Button>{" "}
                  <Button variant="outline-info">Info</Button>{" "}
                  <Button variant="outline-light">Light</Button>{" "}
                  <Button variant="outline-dark">Dark</Button>
                  <Button variant="outline-success">Success</Button>{" "}
                  <Button variant="outline-warning">Warning</Button>{" "}
                  <Button variant="outline-success">Success</Button>{" "}
                  <Button variant="outline-warning">Warning</Button>{" "}
                  <Button variant="outline-success">Success</Button>{" "}
                  <Button variant="outline-warning">Warning</Button>{" "}
                </div>
              </div>
              <p className="post__content">{post.body}</p>
              <div className="reply" onClick={() => this.toggle(index)}>
                <Author postId={post.id} comments={this.state.comments} />
              </div>
              {this.state.showComments === index ? (
                <Comment postId={post.id} comments={this.state.comments} />
              ) : null}
            </div>
          );
        })}
      </>
    );
  }
}

export default Post;
