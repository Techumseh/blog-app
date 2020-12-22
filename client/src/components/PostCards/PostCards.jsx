import React, { Component } from "react";
import './PostCards.css';
import PostCard from "../PostCard/PostCard";
import { getPosts } from "../../services/posts";



class PostCards extends Component  {
  constructor() {
    super()
    this.state = {
      posts: []
    }
  }
  async componentDidMount() {
    const posts = await getPosts()
    this.setState({ posts })
  };
  
render() {
  const POSTS = this.state.posts.map((post, index) =>
    <PostCard name={post.name} imgUrl={post.imgURL} content={post.content} key={index}/>)
  return ( 
    <div> {POSTS} </div>
    )
};
}
export default PostCards;
