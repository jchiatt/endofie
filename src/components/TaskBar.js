import React from 'react';
import { Button, Icon } from '@react95/core';

import '../styles/taskBar.css';

export default function TaskBar() {
    return (
        <div className="taskbar">
            <Button className="taskbar-btn">
                <Icon height={16} name="logo" width={16} /> Start
            </Button>
            <div className="countdown">
                900 days 21:22:22
            </div>
        </div>
    )
}