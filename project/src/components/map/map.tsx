import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap';
import { hotelsType } from '../../types';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapPropsType = {
  data: hotelsType[];
  activeOffer: number;
}
const defaultCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: 'https://assets.htmlacademy.ru/content/intensive/javascript-1/demo/interactive-map/main-pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});
function Map({ data, activeOffer }: MapPropsType) {
  const amsterdamCity = data.find((offer) => offer.city.name === 'Amsterdam')!;
  const mapRef = useRef(null);
  const map = useMap(mapRef, amsterdamCity);

  useEffect(() => {
    if (map) {
      data.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });
        marker
          .setIcon(
            activeOffer !== undefined && offer.id === activeOffer
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(map);
      });
    }
  }, [map, activeOffer, data]);

  return (
    <div id="map" style={{ height: '100%', width: '100%' }} ref={mapRef}></div>

  );
}

export default Map;
