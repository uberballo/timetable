import React, {useState} from 'react'

const Header = ({address, toggleFrom}) =>{
  const getCurrentTime = () => {
    const finninshTime = new Date().toLocaleTimeString('en-GB', {
      timeZone: 'Europe/Helsinki',
      hour: '2-digit', minute: '2-digit'
    });
    return finninshTime
  };

  const [currentTime, setCurrentTime] = useState(getCurrentTime);
  const eficodeAddress = "Pohjoinen Rautatiekatu 25"


  setInterval(() =>{
      setCurrentTime(getCurrentTime)
  },1000)

    const currentAddress = address.address.road + address.address.house_number

    const firstAddress= `From ${toggleFrom ? currentAddress : eficodeAddress }`
    const secondAddress = `To ${toggleFrom ? eficodeAddress : currentAddress}`

    return(
        <div>
            <p>{currentTime}</p>
            <p>{firstAddress} </p>
            <p> {secondAddress} </p>
        </div>
    )
}

export default Header