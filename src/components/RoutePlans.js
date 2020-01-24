import React from 'react'
import SinglePlan from './SinglePlan'

import findTrip from '../utils/Queries';
import { useQuery } from '@apollo/react-hooks';




const efiLat = 60.1694431;
const efiLon = 24.9260771;


const RoutePlans = ({address}) =>{


  const { loading, error, data } = useQuery(findTrip, {
    variables: {
      fromLat: efiLat,
      fromLon: efiLon,
      toLat: address.lat,
      toLon: address.lon
    }
  });


    if (loading) return 'loading..'
    if (error) {
        console.log(error)
        return 'error'
    }

    return(
        <div>
    {data.plan.itineraries.map(e => (
        <SinglePlan data={e} />))
    }
        </div>
    )

}

export default RoutePlans