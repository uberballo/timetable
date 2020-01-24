import React, { useState } from 'react';
import Legs from './Legs';
import SimpleLegs from './SimpleLegs';

const SinglePlan = ({ data }) => {
  const [expand, setExpand] = useState(false);

  const handleClick = () => {
    setExpand(!expand);
  };
  const rows = () => data.legs.map(e => <Legs data={e} onClick={handleClick} />);
  return (
    <div>
      {expand ? (
        <ul className='single-plan-ul'>{rows()}</ul>
      ) : (
        <SimpleLegs data={data} onClick={handleClick} />
      )}
    </div>
  );
};

export default SinglePlan;
