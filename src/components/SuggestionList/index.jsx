import React from 'react'
import Suggestion from '../Suggestion'
import './index.css'

const SuggestionList = ({ suggestions }) => (
  <ul className="SuggestionList">
    {suggestions.map(suggestion => (
      <Suggestion key={suggestion.name} mushroom={suggestion} />
    ))}
  </ul>
)

export default SuggestionList
