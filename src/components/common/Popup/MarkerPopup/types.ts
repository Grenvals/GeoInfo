import { LatIngType } from '../../../../types/types';

export type MarkerPopupType = {
  name: string,
  version?: string,
  launch?: string,
  orbit?: string,
  velocity?: number,
  height?: number,
  latlng: LatIngType,
  image: string,
  imageSize?: string,
};
