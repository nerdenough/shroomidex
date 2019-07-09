import React from 'react'
import './index.css'

const DetailsTable = ({ mushroomProperties }) => {
  const { cap, hymenium, stipe, sporePrint, edibility } = mushroomProperties
  return (
    <div className="DetailsTable">
      <div className="DetailsTable-row">
        <div className="DetailsTable-column">Cap</div>
        <div className="DetailsTable-column">{cap || 'N/A'}</div>
      </div>
      <div className="DetailsTable-row">
        <div className="DetailsTable-column">Hymenium</div>
        <div className="DetailsTable-column">{hymenium || 'N/A'}</div>
      </div>
      <div className="DetailsTable-row">
        <div className="DetailsTable-column">Stipe</div>
        <div className="DetailsTable-column">{stipe || 'N/A'}</div>
      </div>
      <div className="DetailsTable-row">
        <div className="DetailsTable-column">Spore Print</div>
        <div className="DetailsTable-column">{sporePrint || 'N/A'}</div>
      </div>
      <div className="DetailsTable-row">
        <div className="DetailsTable-column">Edibility</div>
        <div className="DetailsTable-column">{edibility}</div>
      </div>
    </div>
  )
}

export default DetailsTable
