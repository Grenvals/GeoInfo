import L from 'leaflet';

import redMarkerIcon from '../../assets/img/markers/red-marker.svg';
import greenMarkerIcon from '../../assets/img/markers/green-marker.svg';
import currentLocationMarkerIcon from '../../assets/img/markers/home-marker.svg';

L.Icon.Default.imagePath = 'https://unpkg.com/leaflet@1.7.1/dist/images/';

export const redMarker = new L.Icon({
  iconUrl: redMarkerIcon,
  iconRetinaUrl: redMarkerIcon,
  iconSize: new L.Point(38, 58),
  className: 'leaflet-div-icon',
});

export const greenMarker = new L.Icon({
  iconUrl: greenMarkerIcon,
  iconRetinaUrl: greenMarkerIcon,
  iconSize: new L.Point(38, 58),
  className: 'leaflet-div-icon',
});

export const currentLocationMarker = new L.Icon({
  iconUrl: currentLocationMarkerIcon,
  iconRetinaUrl: currentLocationMarkerIcon,
  iconSize: new L.Point(47, 58),
  className: 'leaflet-div-icon',
});
