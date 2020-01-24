import React, { useState } from 'react';
import './App.css';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import Address from './components/Address';
import RoutePlans from './components/RoutePlans';

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
});

const openGeocoder = require('node-open-geocoder');

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

function App() {
  const address = useField('text');
  const [currentAddress, setCurrentAddress] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [toggleFrom, setToggleFrom] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    openGeocoder()
      .geocode(address.value)
      .end((err, res) => {
        setAddresses(res);
      });
  };

  const rows = () =>
    addresses.map(e => (
      <Address result={e} setCurrentAddress={setCurrentAddress} />
    ));

  return (
    <ApolloProvider client={client}>
      <div className='App'>
        <form onSubmit={e => handleSubmit(e)}>
          address:
          <input name='address' {...address}></input>
          <button type='submit'> submit</button>
        </form>
        <button onClick={() => setToggleFrom(!toggleFrom)}>
          toggle {toggleFrom ? 'from' : 'to'} Eficode
        </button>
        {currentAddress ? (
          <RoutePlans address={currentAddress} toggleFrom={toggleFrom}/>
        ) : (
          <ul>{rows()}</ul>
        )}
      </div>
    </ApolloProvider>
  );
}

export default App;
