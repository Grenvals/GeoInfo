import L from 'leaflet';

import redMarkerIcon from '../../assets/img/markers/red-marker.svg';
import greenMarkerIcon from '../../assets/img/markers/green-marker.svg';
import currentLocationMarkerIcon from '../../assets/img/markers/home-marker.svg';
import internationalSpaceStationIcon from '../../assets/img/markers/iss-spacestation.svg';
import sateliteIcon from '../../assets/img/markers/satelite.svg';

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

export const internationalSpaceStationMarker = new L.Icon({
  iconUrl: internationalSpaceStationIcon,
  iconRetinaUrl: internationalSpaceStationIcon,
  iconSize: new L.Point(50, 50),
  iconAnchor: [25, 20],
  className: 'leaflet-div-icon',
});

export const sateliteMarker = new L.Icon({
  iconUrl: sateliteIcon,
  iconRetinaUrl: sateliteIcon,
  iconSize: new L.Point(5, 5),
  iconAnchor: [2.5, 2.5],
  className: 'leaflet-div-satelite-icon',
});
