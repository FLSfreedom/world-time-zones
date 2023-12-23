import React from 'react';
import './SelectorOfClocks.css'

const SelectorOfClocks = ({ timeZones, selectedTimeZone, onSelectZone }) => {
  const handleChange = (event) => {
    const selectedZone = event.target.value;
    onSelectZone(selectedZone);
  };

  return (
    <div>
      <label htmlFor="selectorOfTimeZones">Select 
      up to 10 Time Zones:</label>
      <select
        id="selectorOfTimeZones"
        value={selectedTimeZone}
        onChange={handleChange}
      >
        {timeZones.map((zone, index) => (
          <option key={index} value={zone}>
            {zone.replace('/', ', ').replace('/', ', ').replace('_', ' ').replace('_', ' ')}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorOfClocks;