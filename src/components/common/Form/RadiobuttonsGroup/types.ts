import { MapLayerType } from '../../../../types/types';

export interface RadiobuttonsGroupType {
  title: string;
  radiobuttonsList: Array<MapLayerType>;
  onChange(id: string): void;
}
