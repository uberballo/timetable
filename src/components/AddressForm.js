import React from 'react';

const openGeocoder = require('node-open-geocoder');

const AddressForm = ({address, setAddresses, setToggleFrom, toggleFrom}) => {
  const handleSubmit = async e => {
    e.preventDefault();
    openGeocoder()
      .geocode(address.value)
      .end((err, res) => {
        setAddresses(res);
      });
  };

  return (
    <div className='address-form'>
      <form onSubmit={e => handleSubmit(e)}>
        address:
        <input name='address' {...address}></input>
        <button type='submit'> submit</button>
      </form>
      <button onClick={() => setToggleFrom(!toggleFrom)}>
        toggle {toggleFrom ? 'from' : 'to'} Eficode
      </button>
    </div>
  );
};

export default AddressForm