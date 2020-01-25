import React from 'react';
import Legs from './Legs';
import secsToDate from '../helpers/date';

const SinglePlan = ({ data }) => {

  const rows = () =>
    data.legs.map(e => (
      <Legs plan={e} data={data} key={e.endTime + e.startTime} />
    ));
  return (
    <li className='uk-text-center' key={data.endTime}>
      <ul className='uk-list uk-align-center'>
        <div className='uk-grid uk-flex-center'>
          <div className='uk-width-1-1'>
            <p>Start: {secsToDate(data.startTime)}</p>
            <p>End: {secsToDate(data.endTime)}</p>
            <hr className='uk-divider-icon' />
          </div>
          <div className='uk-flex uk-flex-center'>
            <ul className='uk-subnav'>{rows()}</ul>
          </div>
        </div>
      </ul>
    </li>
  );
};

export default SinglePlan;
