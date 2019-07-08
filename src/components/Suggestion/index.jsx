import React from 'react'
import './index.css'

const Suggestion = ({ mushroom }) => {
  return (
    <div className="Suggestion">
      <h2 className="Suggestion-name">{mushroom.name}</h2>
      <h3 className="Suggestion-nickname">{mushroom.nickname}</h3>
      <p className="Suggestion-accuracy">
        {Number.parseFloat(mushroom.accuracy * 100).toFixed(2)}% match!
      </p>
      <img
        className="Suggestion-photo"
        src={mushroom.photo}
        alt={mushroom.name}
      />
      <p className="Suggestion-edibility">
        Edibility: {mushroom.properties.edibility}
      </p>
    </div>
  )
}

export default Suggestion
