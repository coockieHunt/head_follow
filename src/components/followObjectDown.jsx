import skull from '../assets/skull.svg';
import {useRef } from 'react';

import followMouse from '../utils/followMouse.jsx';

const FollowObjectDown = () => {
    const skullRef = useRef();

    const handleImageLoad = () => {
        skullRef.current ? 
        followMouse(
            skullRef.current, 
            { invert: true },
            { animateSmoothly: 0.005 }
        ) : null;
    }

    return (
        <div className="followObjectDown">
            <img src={skull} alt='skull img' ref={skullRef} onLoad={handleImageLoad}/>
        </div>
        
    );
};

export default FollowObjectDown;
