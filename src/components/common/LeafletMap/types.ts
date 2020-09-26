import {
  InternationalSpaceStationType,
  LatIngType,
  MapLayerType,
  MarkerType,
  SatellitesType,
} from '../../../types/types';

type InitialSettingsType = {
  lat: number,
  lng: number,
  zoom: number,
};

export interface LeafletMapPropsType {
  initialSettings: InitialSettingsType;
  markers: Array<MarkerType>;
  mapBGLayer: MapLayerType;
  mapLayers: Array<MapLayerType>;
  onAddMarker(name: string, category: string, latlng: LatIngType): void;
  internationalSpaceStation: InternationalSpaceStationType;
  satelites: SatellitesType;
}
