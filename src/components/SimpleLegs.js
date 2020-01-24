import React from 'react'

const secsToDate = (time) =>{
    let curDate = new Date(null)
    curDate.setTime(time)
    return curDate.toString()
}

const SimpleLegs = ({data, onClick}) =>{
    console.log("data: ",data)
    return(
        <li key={data.startTime} onClick={onClick}>
            <p> {secsToDate(data.startTime)}</p>
            <p> {secsToDate(data.endTime)}</p>
        </li>
    )

}

export default SimpleLegs