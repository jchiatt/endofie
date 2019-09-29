import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import Flames from '../components/Flames';
import ScreenSaver from '../components/ScreenSaver';
import DetailsModal from '../components/DetailsModal';
import AudioPlayer from '../components/AudioPlayer';

export default () => {

  return (
    <>
      <ScreenSaver />
      <StandardLayout>
        <DetailsModal />
        <AudioPlayer />
        <Flames />
      </StandardLayout>
    </>
  )
}