import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, isLoading, selectAllPosts } from "../../store/postsSlice";
import Post from "../../components/Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const isLoadingPosts = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  if (isLoadingPosts) {
    return <div>Loading posts...</div>;
  }

  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  );
};

export default Posts;
