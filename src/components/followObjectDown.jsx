/**
 * A React component that renders a skull image which follows the mouse cursor in an inverted direction.
 * The image uses a ref to initialize mouse-following behavior upon load.
 * 
 * @component
 * @returns {JSX.Element} The JSX element containing the skull image.
 */
import skull from '../assets/skull.svg';
import skullOne from '../assets/skullOne.svg';
import SondSwitch from '../assets/magical-reveal-start.ogg'
import {useRef, useState } from 'react';

import followMouse from '../utils/followMouse.jsx';

const FollowObjectDown = ({muted}) => {
    const [isSkullOne, setIsSkullOne] = useState(false);
    // Ref for the skull image
    const skullRef = useRef();

    const HandleClickSkull = () => {
        setIsSkullOne(!isSkullOne);
        if(!muted){
            const audio = new Audio(SondSwitch);
            audio.volume = 0.2;
            audio.play();
        }
    }

    // Handle image load to initialize followMouse
    const handleImageLoad = () => {
        skullRef.current ? 
        followMouse(
            skullRef.current, 
            { invert: true },
            { animateSmoothly: 0.005 }
        ) : null;
    }

    // Render the component
    return (
        <div className="followObjectDown"  onClick={HandleClickSkull}>
            <img src={isSkullOne ? skullOne : skull} alt='skull img' ref={skullRef} onLoad={handleImageLoad}/>
        </div>
        
    );
};

export default FollowObjectDown;
