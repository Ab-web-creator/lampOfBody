'use client'

import React, { useState } from 'react';


const Search = ({ setSearch, ifSearchingInsideChat, activeUsersLength, className }) => {
  const [inputClassName, setInputClassName] = useState('');
 
  const getPlaceholder = () => {
    if (ifSearchingInsideChat) {
      return `Search: Number of online users: ${activeUsersLength}`;
    }
    return 'Search';
  };

  return (
    <div className={`flex justify-center items-center w-full ${className}`}>
      <div className="flex items-center w-full border border-gray-300 rounded-lg px-4 bg-white">
        <span className="text-2xl text-gray-400 transform -rotate-45 mr-2">&#9906;</span>
        <input
          type="search"
          onChange={(e) => {
            setSearch(e.target.value);
            setInputClassName(e.target.value.trim() !== '' ? 'typed-input' : '');
          }}
          placeholder={getPlaceholder()}
          className={`flex-1 border-none outline-none text-sm text-gray-800 bg-transparent placeholder-gray-400 focus:ring-0 focus:outline-none ${inputClassName}`}
        />
      </div>
    </div>
  );
};

export default Search;
