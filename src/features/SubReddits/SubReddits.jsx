import React, { useEffect } from "react";
import "./SubReddits.css";
import { useDispatch, useSelector } from "react-redux";
import {
  selectAllSubReddits,
  isLoading,
  loadSubReddits,
} from "../../store/subRedditsSlice";

const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectAllSubReddits);
  const isLoadingSubReddits = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadSubReddits());
  }, [dispatch]);

  return (
    <>
      <h2 className="subheading">Subreddits</h2>
      {isLoadingSubReddits
        ? "Loading..."
        : subReddits.map((subReddit, index) => (
            <div key={index}>{subReddit}</div>
          ))}
    </>
  );
};

export default SubReddits;
