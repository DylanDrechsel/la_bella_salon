import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'

const HomeMapSlide = () => {
    const [viewport, setViewport] = useState({
        latitude: 40.6438102722168,
        longitude: -74.82865905761719,
        width: '100vw',
        height: '50vh',
        zoom: 15
    })

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={nextViewport => setViewport(nextViewport)}>
                markers here
            </ReactMapGL>
        </div>
    );
};

export default HomeMapSlide;