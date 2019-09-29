import React from 'react';
import { Button, Icon } from '@react95/core';
import countdown from '../util/countdown';

import '../styles/taskBar.css';

export default function TaskBar() {
    const [years, days, hours, minutes, seconds] = countdown();
    return (
        <div className="taskbar">
            <Button className="taskbar-btn">
                <Icon height={16} name="logo" width={16} /> Start
            </Button>
            <div className="countdown">
                {years} years, {days} days {hours}:{minutes}:{seconds}
            </div>
        </div>
    )
}