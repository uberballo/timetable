import React, {useState, useEffect} from 'react'
import SinglePlan from './SinglePlan'

import ApolloClient from 'apollo-boost';
import findTrip from '../utils/Queries';
//import { useQuery } from 'react-apollo';
import { useQuery } from '@apollo/react-hooks';




const client = new ApolloClient({
  uri: 'https://api.digitransit.fi/routing/v1/routers/hsl/index/graphql'
});

const efiLat = 60.1694431;
const efiLon = 24.9260771;


const RoutePlans = ({address}) =>{
  const [lat, setLat] = useState(60.2052265);
  const [lon, setLon] = useState(24.960996606014106);
  const [plans, setPlans] = useState([])

  const findRoutes = async() =>{
    await client
      .query({
        query: findTrip,
        variables: {
          fromLat: efiLat,
          fromLon: efiLon,
          toLat: address.lat,
          toLon: address.lon 
        }
      })
      .then(response => {
        setPlans(response.data.plan)
        console.log(response.data.plan);
      });
  }

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

            /*
    */
   console.log(data)
    return(
        <div>
    {data.plan.itineraries.map(e => (
        <SinglePlan data={e} />))
    }
        </div>
    )

}

export default RoutePlans