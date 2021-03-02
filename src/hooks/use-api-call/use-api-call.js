import { useState, useCallback } from 'react';

const useApiCall = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const run = useCallback((apiCallPromise) => {
    if (!apiCallPromise || !apiCallPromise.then) {
      throw new Error('Run should get a promise as param');
    }
    setLoading(true);
    return apiCallPromise.then(
      (data) => {
        setData(data);
        setLoading(false);
        setLoaded(true);
      },
      (error) => {
        setLoading(false);
        setLoaded(true);
      },
    );
  }, []);

  return {
    data,
    loading,
    loaded,
    run,
    setData,
  };
};

export default useApiCall;