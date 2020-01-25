import React from 'react';
import secsToDate from '../helpers/date';

const Legs = ({ plan }) => {
  return (
    <li className={'legs-li'}>
      <p>Departure: {secsToDate(plan.startTime)}</p>
      <p>Arrival: {secsToDate(plan.endTime)}</p>
      <p> {plan.mode}</p>
      <p> From {plan.from.name}</p>
      <p> To {plan.to.name}</p>
    </li>
  );
};

export default Legs;
