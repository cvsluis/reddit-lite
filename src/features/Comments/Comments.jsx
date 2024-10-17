import { useDispatch, useSelector } from "react-redux";
import "./Comments.css";
import { loadComments, selectAllComments } from "../../store/commentsSlice";
import Comment from "../../components/Comment/Comment";

const Comments = () => {
  const dispatch = useDispatch();
  const comments = useSelector(selectAllComments);

  return (
    <>
      {!!comments.length && (
        <div className="comments">
          <div className="comments-container">
            <div className="comments-header">
              <h3>Comments</h3>
              <span onClick={() => dispatch(loadComments())} className="comments-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
                  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                </svg>
              </span>
            </div>
            <div className="comment-container">
              {comments.map((comment, i) => (
                <Comment comment={comment} key={i} />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Comments;
