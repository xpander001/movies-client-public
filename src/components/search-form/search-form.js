import React, { useRef } from 'react';
import Input from 'components/input';

const SearchForm = ({ onSearch, initialQuery }) => {
  const timer = useRef();

  const clearTimer = () => clearTimeout(timer.current);

  const onChange = (e) => {
    clearTimer();
    timer.current = setTimeout(() => {
      onSearch(e.target.value);
    }, 500);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    clearTimer();
    onSearch(e.target.elements.search.value);
  };

  return (
    <form className="mb-4" onSubmit={onSubmit}>
      <Input
        defaultValue={initialQuery}
        label="Search"
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
