import { useDispatch } from "react-redux";
import { format } from 'timeago.js';
import "./Post.css";
import { loadComments } from "../../store/commentsSlice";

const Post = ({ post }) => {
  const dispatch = useDispatch();
  const timeago = format(new Date(post.created_utc * 1000));
  return (
    <article className="post">
      <div className="comment-header">
        <p>@{post.author}</p>
        <span className="comment-time">{timeago}</span>
      </div>

      <h3>{post.title}</h3>
      {!!post.selftext && <p className="post-text">{post.selftext}</p>}
      {post.url && <img src={post.url} className="post-image" />}
      <div className="post-buttons">
        <div className="post-button">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-circle-fill up-arrow"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
            </svg>
          </span>
          <span>{post.ups}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-down-circle-fill down-arrow"
              viewBox="0 0 16 16"
            >
              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293z" />
            </svg>
          </span>
        </div>
        <div
          className="post-button"
          onClick={() => dispatch(loadComments(post))}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-chat-fill"
            viewBox="0 0 16 16"
          >
            <path d="M8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6-.097 1.016-.417 2.13-.771 2.966-.079.186.074.394.273.362 2.256-.37 3.597-.938 4.18-1.234A9 9 0 0 0 8 15" />
          </svg>
          <span>{post.num_comments}</span>
        </div>
      </div>
    </article >
  );
};

export default Post;

// https://image.spreadshirtmedia.com/image-server/v1/products/T1459A839PA3861PT28D1052592201W8333H10000/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/zoning-out-black-cat-meme-sticker.jpg
