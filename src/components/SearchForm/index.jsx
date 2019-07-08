import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'
import './index.css'

const SearchForm = ({ onFileChange }) => {
  return (
    <div className="SearchForm">
      <label className="SearchForm-label">
        <FontAwesomeIcon icon={faCamera} />
        &nbsp;Photo Search
        <input
          onChange={onFileChange}
          className="SearchForm-input"
          type="file"
          accept="image/*"
        />
      </label>
    </div>
  )
}

export default SearchForm
