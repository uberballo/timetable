import React from 'react'

const secsToDate = (time) =>{
    let curDate = new Date(null)
    curDate.setTime(time*1000)
    return curDate
}

/*
            <p> {secsToDate(data.startTime)}</p>
            <p> {secsToDate(data.endTime)}</p>
            */
const Legs = ({data}) =>{
    console.log("data: ",data)
    return(
        <li key={data.startTime}>
            <p> {data.mode}</p>
            <p> {data.from.name}</p>
            <p> {data.to.name}</p>
        </li>
    )

}

export default Legs