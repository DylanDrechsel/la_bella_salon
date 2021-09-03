import React from 'react';
import { Button } from 'react-bootstrap'
import { useRecoilState } from 'recoil';
import { websiteState } from '../../Recoil/atoms';

const EnterButton = () => {
    const [website, setWebsite] = useRecoilState(websiteState)

    const handleEnter = () => {
        setWebsite('home')
    }

    return (
        <div className='EnterButtonDiv'>
            <Button className='EnterButton' variant="outline-warning" size="lg" onClick={handleEnter}>Enter!</Button>{' '}
        </div>
    );
};

export default EnterButton;