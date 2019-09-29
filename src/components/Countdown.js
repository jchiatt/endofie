import React from 'react';
import countdown from '../util/countdown';

export default function Countdown() {
  const [years, days, hours, minutes, seconds] = countdown();

  return <ul>
    <li>Years: {years}</li>
    <li>Days: {days}</li>
    <li>Hours: {hours}</li>
    <li>Minutes: {minutes}</li>
    <li>Seconds: {seconds}</li>
  </ul>
}