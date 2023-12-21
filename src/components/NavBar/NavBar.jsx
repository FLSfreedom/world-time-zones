import React from 'react'
import LocalTime from '../LocalTime/LocalTime'
import './NavBar.css'

const NavBar = () => {

  return (
    <div className="navBarMainStyle">
        <div className='navTitleStyle'>
            WORLD TIME CLOCK
        </div>
        <div className='localClockInNavBar'>
          <div className='localClockInNavBarTextDiv'>
            Your local time is
          </div>
          <div className='localTimeDiv'>
            <LocalTime/>
          </div>
        </div>
    </div>
  )
}

export default NavBar