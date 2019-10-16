import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import Flames from '../components/Flames';
import ScreenSaver from '../components/ScreenSaver';
import DetailsModal from '../components/DetailsModal';
import AudioPlayer from '../components/AudioPlayer';
import SEO from '../components/SEO';

export default () => {

  return (
    <>
      <SEO title="Home" />
      <ScreenSaver />
      <StandardLayout>
        <DetailsModal />
        <AudioPlayer />
        <Flames />
      </StandardLayout>
    </>
  )
}