import React, { useState, useEffect } from 'react';
import './Clock.css';

const Clock = ({ timeZone = 'UTC' }) => {
  const [location, setLocation] = useState(getLocation);
  const [time, setTime] = useState(getTime);

  function getLocation() {
    if (timeZone) {
      const timeZoneParts = timeZone.split('/');
      const part0 = timeZoneParts[0].replace(/_/g, ' ');
      const part1 = timeZoneParts[1].replace(/_/g, ' ');
      const part2 = timeZoneParts[2] ? timeZoneParts[2].replace(/_/g, ' ') : '';
      return  <div>
                <div>
                {part0 + ', '}
                </div>
                <div>
                {part1 + (part2 ? ', ' : '')}
                </div>
                <div>
                {part2 ? part2 : ''}
                </div>
              </div>
    }
    return '';
  }

  function getTime() {
    const hhmmss = new Date(new Date().toLocaleString("en-US", { timeZone }));
    const hours = hhmmss.getHours();
    const minutes = hhmmss.getMinutes();
    const seconds = hhmmss.getSeconds();

    const twoDigitsHours = hours <= 9 ? '0' + hours : hours;
    const twoDigitsMinutes = minutes <= 9 ? '0' + minutes : minutes;
    const twoDigitsSeconds = seconds <= 9 ? '0' + seconds : seconds;

    return `${twoDigitsHours}:${twoDigitsMinutes}:${twoDigitsSeconds}`;
  }

  useEffect(() => {
    setLocation(getLocation());
    setTime(getTime());

    const intervalId = setInterval(() => {
      setTime(getTime());
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeZone]);

  return  <div>
            <div id="clockId">{location}</div>
            <div> {time}</div>
          </div>;
};

export default Clock;