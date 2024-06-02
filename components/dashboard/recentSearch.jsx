import React, { useEffect, useState } from 'react';

const RecentSearches = ({ onSearchClick }) => {
  const [recentSearches, setRecentSearches] = useState([]);

  useEffect(() => {
    const storedSearches = JSON.parse(localStorage.getItem('recentSearches')) || [];
    setRecentSearches(storedSearches);
  }, []);

  const handleSearchClick = (searchDetails) => {
    onSearchClick(searchDetails);
  };

  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      {recentSearches.length > 0 ? (
        <ul>
          {recentSearches.map((search, index) => (
            <li key={index} onClick={() => handleSearchClick(search.details)}>
              <strong>{search.time}</strong>: {search.summary}
            </li>
          ))}
        </ul>
      ) : (
        <p>No searches found</p>
      )}
    </div>
  );
};

export default RecentSearches;
