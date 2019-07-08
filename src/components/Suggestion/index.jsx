import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHamburger,
  faSkullCrossbones,
  faHatWizard,
} from '@fortawesome/free-solid-svg-icons'
import './index.css'

const edibilityIcon = {
  edible: faHamburger,
  deadly: faSkullCrossbones,
  psychoactive: faHatWizard,
  unknown: null,
  unpalatable: null,
}

const Suggestion = ({ mushroom }) => {
  const { edibility } = mushroom.properties
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
        Edibility: {edibility}
        <FontAwesomeIcon
          className="Suggestion-edibility-icon"
          icon={edibilityIcon[edibility]}
        />
      </p>
    </div>
  )
}

export default Suggestion
