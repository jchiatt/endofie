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
        {navIsActive && <Navigation />}
        <div className="taskbar">
          <Button className="taskbar-btn" onClick={toggleNav}>
            <Icon height={16} name="logo" width={16} /> Start
          </Button>
          <div className="countdown">
            {years} years, {days} days, {hours}:{minutes}:{seconds}
          </div>
        </div>
      </>
    )
}