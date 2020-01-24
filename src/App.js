import React, { useState } from 'react';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import findTrip from './utils/Queries';
import Address from './components/Address';
import RoutePlans from './components/RoutePlans';

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
});
const efiLat = 60.1694431;
const efiLon = 24.9260771;

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
        {currentAddress ? <RoutePlans address={currentAddress} /> : <ul>{rows()}</ul>}
      </div>
    </ApolloProvider>
  );
}

export default App;
