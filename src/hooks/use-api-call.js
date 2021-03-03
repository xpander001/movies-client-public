import { useState, useCallback } from 'react';

const useApiCall = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);
  const run = useCallback((promise) => {
    promise.then(
      (data) => {
        setData(data);
        setLoaded(true);
      },
      (error) => {
        setLoaded(true);
      },
    );
  }, []);
  return {
    data,
    loaded,
    run,
  };
};

export default useApiCall;
