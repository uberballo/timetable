import React from 'react'

const Address = ({result, setCurrentAddress}) =>{
    const onClick = () =>{
        setCurrentAddress(result)
    }



    return(
        <li className="li-address" key={result.osm_id} onClick={onClick}>
            <p>
                {result.lat} {result.lon}
            </p>
            <p>
                {result.address.road}
            </p>
    </li>
    )
}

export default Address