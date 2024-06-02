
const RecentSearches = ({ onSearchClick, recentSearches }) => {
  console.log("RecentSearches", RecentSearches)
  return (
    <div className="recent-searches">
      <h3>Recent Searches</h3>
      {}
      {recentSearches.length > 0 ? (
        <ul>
          {recentSearches.map((search, index) => (
            <li key={index} onClick={() => onSearchClick(search.details)}>
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
