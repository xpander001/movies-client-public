import { renderHook, act } from '@testing-library/react-hooks';
import useApiCall from './use-api-call';

const responseData = { data: 'my data' };

const deferred = () => {
  let resolve, reject;
  const promise = new Promise((res, rej) => {
    resolve = res;
    reject = rej;
  });
  return { promise, resolve, reject };
};

const initialState = {
  loaded: false,
  loading: false,
  data: null,
  run: expect.any(Function),
  setData: expect.any(Function),
};

const loadingState = {
  loaded: false,
  loading: true,
  data: null,
  run: expect.any(Function),
  setData: expect.any(Function),
};

const loadedState = {
  loaded: true,
  loading: false,
  data: { ...responseData },
  run: expect.any(Function),
  setData: expect.any(Function),
};

const rejectedState = {
  loaded: true,
  loading: false,
  data: null,
  run: expect.any(Function),
  setData: expect.any(Function),
};

describe('use-api-call', () => {
  test('should return the correct initial values before run is called', () => {
    const { result } = renderHook(() => useApiCall());
    expect(result.current).toEqual(initialState);
  });

  test('should return the correct values while loading and after loaded', async () => {
    const { promise, resolve } = deferred();
    const { result } = renderHook(() => useApiCall());
    act(() => {
      result.current.run(promise);
    });
    expect(result.current).toEqual(loadingState);
    await act(async () => {
      resolve(responseData);
    });
    expect(result.current).toEqual(loadedState);
  });

  test('should return the correct values if the promise fails', async () => {
    const { promise, reject } = deferred();
    const { result } = renderHook(() => useApiCall());
    act(() => {
      result.current.run(promise);
    });
    expect(result.current).toEqual(loadingState);
    await act(async () => {
      reject(responseData);
    });
    expect(result.current).toEqual(rejectedState);
  });

  test('should allow to setData', () => {
    const { result } = renderHook(() => useApiCall());
    act(() => {
      result.current.setData({ ...responseData });
    });
    expect(result.current.data).toEqual(responseData);
  });

  test('should fail if a promise is not passed as argument for run', () => {
    const { result } = renderHook(() => useApiCall());
    expect(() => result.current.run()).toThrowErrorMatchingInlineSnapshot(
      `"Run should get a promise as param"`,
    );
  });
});
