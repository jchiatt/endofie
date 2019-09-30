import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import Flames from '../components/Flames';
import ScreenSaver from '../components/ScreenSaver';
import DetailsModal from '../components/DetailsModal';

export default () => {

  return (
    <>
      <ScreenSaver />
      <StandardLayout>
        <DetailsModal />
        <Flames />
      </StandardLayout>
    </>
  )
}