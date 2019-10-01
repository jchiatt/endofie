import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import Flames from '../components/Flames';
import ScreenSaver from '../components/ScreenSaver';
import DetailsModal from '../components/DetailsModal';
import AudioPlayer from '../components/AudioPlayer';
import PaintModal from '../components/PaintModal';

export default () => {

  return (
    <>
      <ScreenSaver />
      <StandardLayout>
        <DetailsModal />
        <PaintModal />
        <AudioPlayer />
        <Flames />
      </StandardLayout>
    </>
  )
}