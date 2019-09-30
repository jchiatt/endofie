import React from 'react';
import '../styles/vendor/normalize.css';
import '../styles/global.css';
import DesktopBackground from "../components/DesktopBackground";
import TaskBar from '../components/TaskBar';

export default function StandardLayout({ children }) {
  return (
    <DesktopBackground>
      {children}
      <TaskBar />
    </DesktopBackground>)
}