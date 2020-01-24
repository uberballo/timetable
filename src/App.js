import React, { useState } from 'react';
import './App.css';
import ApolloClient, { gql } from 'apollo-boost';

import findTrip from './utils/Queries';
import Address from './components/Address';
import RoutePlans from './components/RoutePlans'

const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
});
const efiLat = 60.1694431;
const efiLon = 24.9260771;
//aika sekuntteina, muuta date

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
  const [lat, setLat] = useState(60.2052265);
  const [lon, setLon] = useState(24.960996606014106);
  const [addresses, setAddresses] = useState([]);
  const [plans, setPlans] = useState([])

  const handleSubmit =async e => {
    e.preventDefault();

    
    await client
      .query({
        query: findTrip,
        variables: {
          fromLat: efiLat,
          fromLon: efiLon,
          toLat: lat,
          toLon: lon
        }
      })
      .then(response => {
        setPlans(response.data.plan)
        console.log(response.data.plan);
      });
      
    openGeocoder()
      .geocode(address.value)
      .end((err, res) => {
        setAddresses(res);
        console.log(res);
      });
  };

  const rows = () =>
    addresses.map(e => (
      <Address
        result={e}
        setCurrentAddress={setCurrentAddress}
      />
    ));

  return (
    <div className='App'>
      <form onSubmit={e => handleSubmit(e)}>
        address:
        <input name='address' {...address}></input>
        <button type='submit'> submit</button>
      </form>
      {currentAddress ?
         <RoutePlans data={plans} />
          :<ul>{rows()}</ul>}
    </div>
  );
}

export default App;
