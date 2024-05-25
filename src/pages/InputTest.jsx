import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const InputTest = () => {
  return (
    <div className="inputtest-wrapper">
      <nav className="test-nav-wrapper">
        <ul className="nav-ul">
          <li className="nav-link"><Link to="test1">Input test US</Link></li>
          <li className="nav-link"><Link to="test2">Input test EU</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
