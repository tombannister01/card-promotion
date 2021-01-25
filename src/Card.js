import React, { useState, useEffect } from 'react'
import './App.css'
import Axios from 'axios'



function Card() {
  const [isHidden, setIsHidden] = useState(false)
  const [rewardAmount, setRewardAmount] = useState(0)

  function hideCard(e) {
    setIsHidden(true)

  }

  useEffect(() => {
    Axios.get('http://www.randomnumberapi.com/api/v1.0/random?min=1&max=10&count=1')
      .then(
        (res) =>
          setRewardAmount(res.data[0])
      )


    // setRewardAmount(2.50)
  }, [])

  let cardClassName = 'playing-card'

  if (isHidden) {
    cardClassName = 'playing-card-blank'
    return <div className="image-box">
      <img src="/Playing-card.png" alt="card" height="200" className={cardClassName} />
      <h1 className="reward-amount"><span>£</span><span>{rewardAmount}</span></h1>
    </div>


  } else return (
    <div onClick={hideCard} className="image-box">
      <img src="/Playing-card.png" alt="card" height="200" className={cardClassName} />
    </div>
  );

}

export default Card;