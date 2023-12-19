import React from 'react';

const SelectorOfClocks = ({ timeZones, selectedTimeZone, onSelectZone }) => {
  const handleChange = (event) => {
    const selectedZone = event.target.value;
    onSelectZone(selectedZone);
  };

  return (
    <div>
      <label htmlFor="selectorOfTimeZones">Select Time Zone:</label>
      <select
        id="selectorOfTimeZones"
        value={selectedTimeZone}
        onChange={handleChange}
      >
        {timeZones.map((zone, index) => (
          <option key={index} value={zone}>
            {zone}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectorOfClocks;