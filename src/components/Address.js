import React from 'react';

const Address = ({ result, setCurrentAddress }) => {
  const onClick = () => {
    setCurrentAddress(result);
    console.log(result);
  };

  const address = result.address;

  return (
    <li className='li-address' >
      <p>
        {result.lat} {result.lon}
      </p>
      <p>
        {address.road} {address.house_number}, {address.city},{' '}
        {address.postcode}
      </p>
      {address.address29 ? <p>{address.address29}</p> : null}
      <button onClick={onClick}>Select</button>
    </li>
  );
};

export default Address;
