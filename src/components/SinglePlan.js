import React, { useState } from 'react';
import Legs from './Legs';
import SimpleLegs from './SimpleLegs';

const SinglePlan = ({ data }) => {
  const [expand, setExpand] = useState(false);
  console.log(data)
  const handleClick = () => {
    setExpand(!expand);
  };
  const rows = () => data.legs.map(e => <Legs  data={e} onClick={handleClick} key={e.to.name} />);
  return (
    <li className="uk-align-center uk-text-center" >
      {expand ? (
        <ul className='uk-list uk-list-divider'>{rows()}</ul>
      ) : (
        <SimpleLegs data={data} onClick={handleClick} />
      )}
    </li >
  );
};

export default SinglePlan;
