import React from 'react'
import './index.css'

const SearchForm = ({ onFileChange }) => {
  return (
    <div className="SearchForm">
      <label className="SearchForm-label">
        Add Photo
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
