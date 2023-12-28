import React, { useState } from 'react';
import './Search.css'


const Search = ({ timeZones, onSelectZone }) => {
  const [search, setSearch] = useState('');

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  const results = !search
    ? []
    : timeZones.filter((zone) => zone.toLowerCase().includes(search.toLowerCase()));

  const secondFilter = results.filter(zone => zone != 'Select the time zone you want to show')
  const upToTenResults = secondFilter.slice(0, 11);

  const handleTimeZoneSelection = (selectedZone) => {
    onSelectZone(selectedZone);
  };

  return (
    <div>
      <div>Search for the time zone you want</div>
      <input value={search} onChange={searcher} type="text" placeholder="Select the time zone you want show" />
        <table>
          <tbody>
            {upToTenResults.map((zone, index) => (
            <tr key={index} value={zone} onClick={() => handleTimeZoneSelection(zone)}>
              <td>
                {zone.replace('/', ', ').replace('/', ', ').replace('_', ' ').replace('_', ' ')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Search;