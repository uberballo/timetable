import React from 'react';

// eslint-disable-next-line no-undef
const openGeocoder = require('node-open-geocoder');

const AddressForm = ({ address, setAddresses, setToggleFrom, toggleFrom }) => {
  const handleSubmit = async e => {
    e.preventDefault();
    openGeocoder()
      .geocode(address.value)
      .end((err, res) => {
        const result = res.filter(e => {
          return e.address.city === 'Helsinki';
        });
        setAddresses(result);
      });
  };

  return (
    <div className='uk-grid-small'>
      <form onSubmit={e => handleSubmit(e)}>
        address:
        <input
          className='uk-textarea uk-width-1-1@s'
          name='address'
          placeholder="Type your adress here. E.g. Hämeentie 13 Helsinki"
          {...address}
        ></input>
        <button
          className='uk-button uk-button-default uk-width-1-2@s'
          type='submit'
        >
          {' '}
          search
        </button>
        <button
          className='uk-button uk-button-default uk-width-1-2@s'
          onClick={() => setToggleFrom(!toggleFrom)}
        >
          toggle {toggleFrom ? 'from' : 'to'} Eficode
        </button>
      </form>
    </div>
  );
};

export default AddressForm;
