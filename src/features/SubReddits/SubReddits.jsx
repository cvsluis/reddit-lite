import React, { useEffect } from "react";
import "./SubReddits.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllSubReddits,
  isLoading,
  loadSubReddits,
  setSelectedSubReddit,
} from "../../store/subRedditsSlice";

const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectAllSubReddits);
  const isLoadingSubReddits = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadSubReddits());
  }, [dispatch]);

  return (
    <div className="subreddit-container">
      <h2 className="subheading">Subreddits</h2>
      <div className="subreddit-container">
        {isLoadingSubReddits
          ? "Loading..."
          : subReddits.map((subReddit, index) => (
            <div
              key={index}
              className="subreddit"
              onClick={() =>
                dispatch(
                  setSelectedSubReddit(subReddit.display_name_prefixed)
                )
              }
            >
              {subReddit.display_name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SubReddits;
