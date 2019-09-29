import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import { Button, Icon, Modal } from '@react95/core';
import SpinningLogo from '../components/SpinningLogo';
import Flames from '../components/Flames';
import ScreenSaver from '../components/ScreenSaver';

export default () => {

  return (
    <>
      <ScreenSaver />
      <StandardLayout>
        <SpinningLogo />
        <Flames />
      </StandardLayout>
    </>
  )
}