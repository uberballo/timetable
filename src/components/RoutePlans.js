import React from 'react';
import SinglePlan from './SinglePlan';
import Header from './Header';

import findTrip from '../utils/Queries';
import { useQuery } from '@apollo/react-hooks';

const efiLat = 60.1694431;
const efiLon = 24.9260771;

const RoutePlans = ({ address, toggleFrom }) => {
  const { loading, error, data } = useQuery(findTrip, {
    variables: {
      fromLat: toggleFrom ? address.lat : efiLat,
      fromLon: toggleFrom ? address.lon : efiLon,
      toLat: toggleFrom ? efiLat : address.lat,
      toLon: toggleFrom ? efiLon : address.lon
    },
    pollInterval: 30000
  });

  if (loading) return 'loading..';
  if (error) {
    console.log(error);
    return 'error';
  }
  return (
    <div>
      <Header address={address} toggleFrom={toggleFrom} />
      {data.plan.itineraries.map(e => (
        <SinglePlan data={e} key={e.startTime}/>
      ))}
    </div>
  );
};

export default RoutePlans;
