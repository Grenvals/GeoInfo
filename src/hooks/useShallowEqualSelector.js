import { shallowEqual, useSelector } from 'react-redux';

export const useShallowEqualSelector = (selector) => {
  return useSelector(selector, shallowEqual);
};
