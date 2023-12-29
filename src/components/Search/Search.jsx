import React, { useState, useEffect, useRef } from 'react';
import './Search.css';

const Search = ({ timeZones, onSelectZone }) => {
  const [search, setSearch] = useState('');
  const [showResults, setShowResults] = useState(false);
  const tableMount = useRef();

  const searcher = (e) => {
    setSearch(e.target.value);
    setShowResults(true);
  };

  const handleTimeZoneSelection = (selectedZone) => {
    onSelectZone(selectedZone);
    setShowResults(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (tableMount.current && !tableMount.current.contains(event.target) && event.target.tagName !== 'INPUT') {
        setShowResults(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, []);

  const results = !search
    ? []
    : timeZones.filter((zone) => zone.toLowerCase().includes(search.toLowerCase()));

  const secondFilter = results.filter((zone) => zone !== 'Select the time zone you want to show');
  const upToTenResults = secondFilter.slice(0, 11);

  return (
    <div>
      <div className='searchBarDiv'>Search by time zone name here</div>
      <input value={search} onChange={searcher} type="text" placeholder="Type the name of the time zone here" />
      {showResults && (
        <table ref={tableMount}>
          <tbody>
            {upToTenResults.map((zone, index) => (
              <tr key={index} onClick={() => handleTimeZoneSelection(zone)}>
                <td>{zone.replace('/', ', ').replace('/', ', ').replace('_', ' ').replace('_', ' ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Search;