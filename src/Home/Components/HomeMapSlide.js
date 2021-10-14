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
                    <div> 
                    <a style={{ textDecoration: 'none' }} href='https://www.google.com/maps/dir//La+Bella+Salon+%26+Spa+by+Regina,+U.S.+22,+Lebanon,+NJ/@40.6438651,-74.8609446,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c38c527b5bf88f:0x9fcf36c61f41b355!2m2!1d-74.8259239!2d40.6437973'> 
                            <p className='marker'> 
                                <b> La Bella Salon & Spa </b> 
                            </p>
                        </a> 
                    </div>

                    {viewport.zoom > 18 ?
                        <a href='https://www.google.com/maps/dir//La+Bella+Salon+%26+Spa+by+Regina,+U.S.+22,+Lebanon,+NJ/@40.6438651,-74.8609446,13z/data=!4m8!4m7!1m0!1m5!1m1!1s0x89c38c527b5bf88f:0x9fcf36c61f41b355!2m2!1d-74.8259239!2d40.6437973'> 
                            <img style={{transform: `translate(${SIZE/2 + UNIT}, ${SIZE/2 + UNIT}`}} className='map-pin' src={MapPin} />
                        </a>  
                    : null }
                </Marker>

            </ReactMapGL>
        </div>
    );
};

export default HomeMapSlide;