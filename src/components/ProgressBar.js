import React from 'react';
import { ProgressBar as R95ProgressBar } from '@react95/core';

const startDate = new Date(2019, 9, 19) // October 19, 2019
const endDate = new Date(2025, 9, 14) // October 14, 2025
const today = new Date()
const progressSinceStart = Math.abs(today - startDate)
const totalTimeDuration = Math.abs(endDate - startDate)
const progress = Math.round((progressSinceStart / totalTimeDuration) * 100)

export default function ProgressBar() {
  return <R95ProgressBar percent={progress} />
}