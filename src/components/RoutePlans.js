import React from 'react'
import SinglePlan from './SinglePlan'

const RoutePlans = ({data}) =>{

     const rows = () =>
    data.itineraries.map(e => (
        <SinglePlan data={e} />
    ));

    return(
        <div>
            {rows()}
        </div>
    )

}

export default RoutePlans