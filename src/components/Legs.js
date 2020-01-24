import React from 'react'

const secsToDate = (time) =>{
    let curDate = new Date(null)
    curDate.setTime(time)
    return curDate.toString()
}

const Legs = ({data, onClick}) =>{

    return(
        <li key={data.startTime+data.endTime} onClick={onClick}>
            <p> {secsToDate(data.startTime)}</p>
            <p> {secsToDate(data.endTime)}</p>
            <p> {data.mode}</p>
            <p> {data.from.name}</p>
            <p> {data.to.name}</p>
        </li>
    )

}

export default Legs