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
}

const Suggestion = ({ mushroom }) => {
  const { edibility } = mushroom.properties
  return (
    <li className="Suggestion">
      <div
        className="Suggestion-photo"
        style={{ backgroundImage: `url(${mushroom.photo})` }}
      />
      <div className="Suggestion-header">
        <h2 className="Suggestion-name">{mushroom.name}</h2>
        <h3 className="Suggestion-nickname">{mushroom.nickname}</h3>
        <p className="Suggestion-accuracy">
          {Number.parseFloat(mushroom.accuracy * 100).toFixed(1)}% match
        </p>
      </div>
      {/* {edibility !== 'unknown' && (
        <p className="Suggestion-edibility">
          {edibility}
          {edibilityIcon[edibility] ? (
            <FontAwesomeIcon
              className="Suggestion-edibility-icon"
              icon={edibilityIcon[edibility]}
            />
          ) : null}
        </p>
      )} */}
    </li>
  )
}

export default Suggestion
