import React from "react";
import StandardLayout from '../layouts/StandardLayout';
import { Button, Icon, Modal, ProgressBar } from '@react95/core';
import VisitorCounter from '../components/VisitorCounter';
import SpinningLogo from '../components/SpinningLogo';
import Flames from '../components/Flames';

const startDate = new Date(2019,9,19); // October 19, 2019
const endDate = new Date(2025,9,14); // October 14, 2025
const today = new Date();
const progressSinceStart = Math.abs(today - startDate);
const totalTimeDuration = Math.abs(endDate - startDate);
const progress = Math.round((progressSinceStart/totalTimeDuration) * 100);

export default () => (
  <StandardLayout>
    <marquee>🔥🔥🔥</marquee>
    <VisitorCounter />
    <Button>Click me!</Button>
    <ProgressBar percent={progress} />
    <Icon height={48} name="computer" width={48} />
    <Icon height={48} name="recycle_file" width={48} />
    <Icon height={48} name="recycle_empty" width={48} />
    <Icon height={48} name="mute" width={48} />
    <Icon height={48} name="unmute" width={48} />
    <Modal defaultPosition={{ x: 200, y: 200 }}>test</Modal>
    <SpinningLogo />
    <Flames />
  </StandardLayout>
)
