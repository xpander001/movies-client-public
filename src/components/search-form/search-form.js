import React, { useState, useEffect } from 'react';
import Input from 'components/input';
import useDebounce from 'hooks/use-debounce';

const SearchForm = ({ initialQuery, onSearch }) => {
  const [inputValue, setInputValue] = useState(initialQuery);
  const { debouncedValue, flushDebounced } = useDebounce(inputValue);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  const onChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    flushDebounced();
    //onSearch(inputValue);
  };

  return (
    <form className="mb-4" onSubmit={onSubmit}>
      <Input value={inputValue} onChange={onChange} />
    </form>
  );
};

export default SearchForm;
