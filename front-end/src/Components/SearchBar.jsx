const SearchBar = ({ onSearch }) => {
  return (
    <div className="p-6 bg-white/60 backdrop-blur-sm shadow-sm sticky top-0 z-10">
      <div className="max-w-3xl mx-auto">
        <input
          type="text"
          placeholder="🔍 Search jobs by location..."
          className="w-full px-6 py-3 rounded-full border border-gray-300 shadow focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 placeholder-gray-500 text-base bg-white"
          onChange={(e) => onSearch(e.target.value)}
        />
      </div>
    </div>
  );
};

export default SearchBar;
