import React, { useState, useEffect } from 'react';

const LocalTime = () => {
  const [localTime, setLocalTime] = useState(getLocalTime);

  function getLocalTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const TwoDigitsHours = hours <= 9 ? '0' + hours : hours;
    const TwoDigitsMinutes = minutes <= 9 ? '0' + minutes : minutes;
    const TwoDigitsSeconds = seconds <= 9 ? '0' + seconds : seconds;

    return `${TwoDigitsHours}:${TwoDigitsMinutes}:${TwoDigitsSeconds}`;
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLocalTime(getLocalTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return <div>{localTime}</div>;
};

export default LocalTime;