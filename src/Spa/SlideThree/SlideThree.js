import React from 'react';
import SpaRoomPicture from '../../assets/spa_room_la_bella.jpg'

const SlideThree = () => {
    return (
        // Picture of Spa Room
        <div className='spa-slide-three-div'>
            <img className='spa-room-picture' src={SpaRoomPicture} />
        </div>
    );
};

export default SlideThree;