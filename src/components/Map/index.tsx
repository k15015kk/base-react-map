import ReactMapGL, { NavigationControl } from 'react-map-gl';
import maplibregl from 'maplibre-gl'
import { useState } from 'react';

const Map = () => {
    const [viewState, setViewState] = useState({
        longitude: 139.7671365841117,
        latitude: 35.68143950212949, 
        zoom: 15,
    })

    return (
        <ReactMapGL
            {...viewState}
            style={{width: '100vw', height: '100vh'}}
            mapStyle={process.env.MAP_URL}
            mapLib={maplibregl}
            onMove={(event) => setViewState(event.viewState)}
        >
            <NavigationControl />
        </ReactMapGL>
    )
}

export default Map;