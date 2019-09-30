import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import Flames from '../components/Flames';
import ScreenSaver from '../components/ScreenSaver';

export default () => {

  return (
    <>
      <ScreenSaver />
      <StandardLayout>
        <Flames />
      </StandardLayout>
    </>
  )
}