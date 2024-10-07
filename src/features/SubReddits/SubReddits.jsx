import React, { useEffect } from 'react';
import './SubReddits.css';
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
    <aside>
      <div className='search'>
        <input className='search-input' placeholder='Search' />
      </div>
      <h2 className='subheading'>Subreddits</h2>
      {subReddits.map((subReddit, index) => (
        <div key={index}>
          {subReddit}
        </div>
      ))}
    </aside>
  );
};

export default SubReddits;
