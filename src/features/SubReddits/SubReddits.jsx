import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllSubReddits, isLoading, loadSubReddits } from '../../store/subRedditsSlice';


const SubReddits = () => {
  const dispatch = useDispatch();
  const subReddits = useSelector(selectAllSubReddits);
  const isLoadingSubReddits = useSelector(isLoading);

  useEffect(() => {
    dispatch(loadSubReddits());
  }, [dispatch]);

  if (isLoadingSubReddits) {
    return <div>loading state</div>;
  }

  return (
    <section>
      <h2>Subreddits</h2>
      {subReddits.map((subReddit, index) => (
        <div key={index}>
          {subReddit}
        </div>
      ))}
    </section>
  );
};

export default SubReddits;
