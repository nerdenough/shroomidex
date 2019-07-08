import React from 'react'
import './index.css'

const Footer = () => (
  <footer className="Footer">
    <p className="Footer-disclaimer">
      Shroomidex provides suggestions based on a limited amount of data. These
      suggestions may not be accurate. Consume mushrooms at your own risk.
    </p>
    <p className="Footer-author">
      Made with&nbsp;
      <img className="Footer-mushroom" src="./shroom-icon.png" alt="shrooms" />
      &nbsp;by Brendan Goodenough
    </p>
  </footer>
)

export default Footer
