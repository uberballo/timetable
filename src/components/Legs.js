import React from 'react'
import secsToDate from '../helpers/date'


const Legs = ({data, onClick}) =>{

    return(
        <li className={"legs-li"} key={data.startTime+data.endTime} onClick={onClick}>
            <p> {secsToDate(data.startTime)}</p>
            <p> {secsToDate(data.endTime)}</p>
            <p> {data.mode}</p>
            <p> From {data.from.name}</p>
            <p> To {data.to.name}</p>
        </li>
    )

}

export default Legs