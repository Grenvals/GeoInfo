import { RootStateType } from './../store/state/state';
import { shallowEqual, useSelector } from 'react-redux';

type SelectorType = (state: RootStateType) => any;

export const useShallowEqualSelector = (selector: SelectorType): any => {
  return useSelector(selector, shallowEqual);
};
