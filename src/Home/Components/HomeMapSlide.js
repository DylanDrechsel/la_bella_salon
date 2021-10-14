import React, { useState } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl'
import MapPin from '../../Assets/map-pin.png'

const SIZE = 20;
const UNIT = "px";
  
const HomeMapSlide = () => {
    const [viewport, setViewport] = useState({
        latitude: 40.64381057407044,
        longitude: -74.82595317784701,
        width: '100vw',
        height: '50vh',
        zoom: 18
    })
    


    return (
        <div>
            <ReactMapGL
                {...viewport}
                mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
                onViewportChange={nextViewport => setViewport(nextViewport)}
                mapStyle='mapbox://styles/dylandrechsel/ckm3pch0w220218qt4l0ud8yb'
                >
        
                <Marker latitude={40.64385057407044} longitude={-74.82595317784701} offsetLeft={-20} offsetTop={-10} >
                    <div> <p className='marker'> <b> La Bella Salon & Spa </b> </p> </div>

                    {viewport.zoom > 18 ?
                        <img style={{transform: `translate(${SIZE/2 + UNIT}, ${SIZE/2 + UNIT}`}} className='map-pin' src={MapPin} />
                    : null }
                </Marker>

            </ReactMapGL>
        </div>
    );
};

export default HomeMapSlide;