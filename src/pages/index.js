import React from "react";
import StandardLayout from '../layouts/StandardLayout';
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