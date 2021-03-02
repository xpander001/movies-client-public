import React, { useState, useEffect } from 'react';
import Input from 'components/input';
import useDebounce from 'hooks/use-debounce';

const SearchForm = ({ onSearch, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const { debouncedValue: debouncedQuery, clearTimer } = useDebounce(query);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const onChange = (e) => {
    setQuery(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clearTimer();
    onSearch(query);
  };

  return (
    <form className="mb-4" onSubmit={onSubmit}>
      <Input
        label="Search"
        value={query}
        type="text"
        name="search"
        id="search"
        onChange={onChange}
        placeholder="Search here for movie titles"
      />
    </form>
  );
};

export default SearchForm;
