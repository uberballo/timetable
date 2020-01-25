import React from 'react'
import secsToDate from '../helpers/date'



const SimpleLegs = ({data, onClick}) =>{
    return(
        <li key={data.startTime} onClick={onClick}>
            <p> {secsToDate(data.startTime)}</p>
            <p> {secsToDate(data.endTime)}</p>
        </li>
    )

}

export default SimpleLegs