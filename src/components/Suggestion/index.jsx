import React from 'react'
import DetailsTable from '../DetailsTable'
import './index.css'

const Suggestion = ({ mushroom }) => {
  return (
    <li className="Suggestion">
      <div
        className="Suggestion-photo"
        style={{ backgroundImage: `url(${mushroom.photo})` }}
      />
      <div className="Suggestion-details">
        <h2 className="Suggestion-name">{mushroom.name}</h2>
        <h3 className="Suggestion-nickname">{mushroom.nickname}</h3>
        <p className="Suggestion-accuracy">
          {Number.parseFloat(mushroom.accuracy * 100).toFixed(1)}% match
        </p>
      </div>
      <DetailsTable mushroomProperties={mushroom.properties} />
    </li>
  )
}

export default Suggestion
