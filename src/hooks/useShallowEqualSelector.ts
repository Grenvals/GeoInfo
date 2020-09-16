import { shallowEqual, useSelector } from 'react-redux';

export const useShallowEqualSelector = (selector: any): any => {
  return useSelector(selector, shallowEqual);
};
