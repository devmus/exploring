import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header>
      <div className="h1-wrapper">
        <h1>Header</h1>
      </div>
      <nav className="header-nav">
        <ul className="nav-ul">
          <li className="nav-link"><Link to="/">Home</Link></li>
          <li className="nav-link"><Link to="/inputtest">Input test</Link></li>
        </ul>
      </nav>
    </header>
  )
}
