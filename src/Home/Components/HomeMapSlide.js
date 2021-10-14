import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl'

const HomeMapSlide = () => {
    const [viewport, setViewport] = useState({
        latitude: 40.64381057407044,
        longitude: -74.82595317784701,
        width: '100vw',
        height: '50vh',
        zoom: 18
    })

    console.log(viewport)

    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle='mapbox://styles/dylandrechsel/ckm3pch0w220218qt4l0ud8yb'
                >
                markers here
            </ReactMapGL>
        </div>
    );
};

export default HomeMapSlide;