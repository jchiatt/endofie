import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import { Button, Icon, Modal } from '@react95/core';
import SpinningLogo from '../components/SpinningLogo';
import Flames from '../components/Flames';
import ScreenSaver from '../components/ScreenSaver';
import ProgressBar from '../components/ProgressBar';
import Countdown from '../components/Countdown';

export default () => {

  return (
    <>
      <ScreenSaver />
      <StandardLayout>
        <ProgressBar />
        <SpinningLogo />
        <Flames />
        <Countdown />
      </StandardLayout>
    </>
  )
}