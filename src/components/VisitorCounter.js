import React from 'react';

function generateRandomNumber(floor = 1, ceiling = 1000000) {
  return Math.floor(Math.random() * (ceiling - floor + 1) + floor)
}

function getCount() {
  if (!localStorage.getItem('endofie_counter')) {
    setCount();
  }
  return localStorage.getItem('endofie_counter');
}

function setCount(count = generateRandomNumber()) {
  localStorage.setItem('endofie_counter', count);
}

function incrementCount() {
  let currentCount = getCount();
  currentCount++;
  setCount(currentCount);
}

export default function VisitorCounter() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    setCount(getCount());
    incrementCount();
  }, []);

  return <p style={{ margin: 0 }}>You may have visited this page {count}ish times. Or not.</p>
}
