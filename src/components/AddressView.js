import React, { useState } from 'react';
import Address from './Address';
import AddressForm from './AddressForm';

const useField = type => {
  const [value, setValue] = useState('');

  const onChange = event => {
    setValue(event.target.value);
  };
  return {
    type,
    value,
    onChange
  };
};

const AddressView = ({ toggleFrom, setToggleFrom, setCurrentAddress }) => {
  const address = useField('text');
  const [addresses, setAddresses] = useState(null);

  const rows = () =>
    addresses.map(e => (
      <Address
        key={e.osm_id}
        result={e}
        setCurrentAddress={setCurrentAddress}
      />
    ));

  return (
    <div className="uk-position-top-center uk-align-center uk-padding">
      <AddressForm
        toggleFrom={toggleFrom}
        address={address}
        setAddresses={setAddresses}
        setToggleFrom={setToggleFrom}
      />
      {addresses ? 
        <ul className = "uk-list uk-list-striped uk-align-bottom">{rows()}</ul> : null}
    </div>
  );
};

export default AddressView;
