// const { data, loaded, run } = useApiCall();

// run(apiClient(url))

import { useState, useCallback } from 'react';

const useApiCall = () => {
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState(null);
  const run = useCallback(async (f) => {
    try {
      setLoaded(false);
      const result = await f;
      setData(result);
      setLoaded(true);
    } catch (err) {
      setLoaded(true);
    }
  }, []);

  return {
    data,
    loaded,
    run,
  };
};

export default useApiCall;
