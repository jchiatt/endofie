import React from 'react';
import { Button, Icon } from '@react95/core';
import countdown from '../util/countdown';
import Navigation, { useNav } from './Navigation'

import '../styles/taskBar.css';

export default function TaskBar() {
    const [years, days, hours, minutes, seconds] = countdown();
    const [navIsActive, toggleNav] = useNav();
    return (
      <>
        {navIsActive && <Navigation toggleNav={toggleNav} />}
        <div className="taskbar">
          <Button className="taskbar-btn" onClick={toggleNav}  aria-expanded={navIsActive ? true : false}>
            <img src={'./logo.png'} height={16} width={16} alt="" /> 
            <span>{navIsActive ? 'Close' : 'Start'}</span>
          </Button>
          <div className="countdown">
            {years} years, {days} days, {hours}:{minutes}:{seconds}
          </div>
        </div>
      </>
    )
}