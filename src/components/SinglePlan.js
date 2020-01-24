import React from 'react'
import Legs from './Legs'

const SinglePlan = ({data}) =>{

    const rows = () =>
    data.legs.map(e => (
        <Legs data={e} />
    ));


    return(
        <ul className="single-plan-ul">
            {rows()}
        </ul>
    )
}

export default SinglePlan