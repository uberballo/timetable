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

  if (loading) return <p className='uk-text-center '>loading..</p>;
  if (error) {
    console.log(error);
    return 'error';
  }

  return (
    <div className='uk-container uk-container-center uk-align-center '>
      <Header address={address} toggleFrom={toggleFrom} />
      <ul className='uk-list uk-list-striped uk-align-center'>
        {data.plan.itineraries.map(e => (
          <SinglePlan
            data={e}
            address={address}
            key={e.endTime + e.walkDistance}
          />
        ))}
      </ul>
    </div>
  );
};

export default RoutePlans;
