import React, { useEffect } from "react";
import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { loadPosts, isLoading, selectAllPosts } from "../../store/postsSlice";
import Post from "../../components/Post/Post";

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const isLoadingPosts = useSelector(isLoading);
  const selectedSubReddit = useSelector(
    (state) => state.subReddits.selectedSubReddit
  );

  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch, selectedSubReddit]);

  if (isLoadingPosts) {
    return <div className="posts">Loading posts...</div>;
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
