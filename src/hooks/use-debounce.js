import { useState, useEffect, useRef } from 'react';

const useDebounce = (value, delay = 500) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  const timer = useRef();

  const clearTimer = () => clearTimeout(timer.current);

  const flushDebounced = () => {
    clearTimer();
    setDebouncedValue(value);
  };

  useEffect(() => {
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimer();
    };
  }, [value, delay]);

  return { debouncedValue, clearTimer, flushDebounced };
};

export default useDebounce;
