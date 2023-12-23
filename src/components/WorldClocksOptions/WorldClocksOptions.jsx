import React, { useState } from 'react';
import Clock from '../Clock/Clock';
import SelectorOfClocks from '../SelectorOfClocks/SelectorOfClocks';
import './WorldClocksOptions.css';

const WorldClocksOptions = ({ timeZones }) => {
  const [selectedTimeZones, setSelectedTimeZones] = useState([]);

  const handleSelectTimeZone = (timeZone) => {
    if (timeZone !== timeZones[0]) {
      const updatedTimeZones = [timeZone, ...selectedTimeZones];

      if (updatedTimeZones.length > 10) {
        updatedTimeZones.pop();
      }

      setSelectedTimeZones(updatedTimeZones);
    }
  };

  const removeTimeZone = (index) => {
    const updatedTimeZones = [...selectedTimeZones];
    updatedTimeZones.splice(index, 1);
    setSelectedTimeZones(updatedTimeZones);
  };

  const clearAllClocks = () => {
    setSelectedTimeZones([]);
  };

  return (
    <div className='highDivContainerOfCardsAndSelector'>
      <div className='selectorOfClocksAndClearButtonDiv'>
        <SelectorOfClocks
          timeZones={timeZones}
          selectedTimeZone={selectedTimeZones[0]}
          onSelectZone={handleSelectTimeZone}
        />
        <button onClick={clearAllClocks}>Close all clocks</button>
      </div>
      <div className="otherClocksContainer">
        {selectedTimeZones.map((timeZone, index) => (
          <div key={index} className="clocksCards">
            <Clock timeZone={timeZone} onRemove={() => removeTimeZone(index)} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorldClocksOptions;