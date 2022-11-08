import { useRef } from 'react';
import { hotelsType } from '../../types';

type MapPropsType = {
  className: string;
  data: hotelsType[];
}
function Map({ className, data }: MapPropsType) {
  const map = useRef(null);

  return (
    <section className={`${className} map`}>
      <div id="map" style={{ width: '100%', height: '100%' }} ref={map}></div>
    </section>
  );
}

export default Map;
