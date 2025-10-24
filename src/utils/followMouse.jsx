/**
 * Makes an element follow mouse movement with dynamic rotation
 * @param {HTMLElement} element - The DOM element to animate
 * @param {Object} options - Configuration options
 * @param {boolean} [options.invert=false] - Horizontally flips the element (rotateY 180°)
 * @param {Object} [options.rotateConfig] - Rotation configuration
 * @param {number} [options.rotateConfig.min=60] - Minimum rotation in degrees (mouse at top)
 * @param {number} [options.rotateConfig.max=-30] - Maximum rotation in degrees (mouse at bottom)
 * @param {number} [options.rotateConfig.neutral=40] - Neutral rotation (mouse at center)
 * @param {number} [options.animateSmoothly=0.1] - Smoothing factor for animation (0 to 1) 
 * @example
 * followMouse(element, { invert: true });
 * followMouse(element, { rotateConfig: { min: 0, max: 90 } });
 * followMouse(element, { animateSmoothly: 0.05 }) //smooth 0.005 , fast 0.2, quick|remove lerp 0.5;
 */

function followMouse(element, options = {}) {
    const {
        invert = false,
        rotationConfig = {min: 60, max: -30, neutral: 40},
        animateSmoothly = 0.1
    } = options;


    let targetRotation = rotationConfig.neutral;
    let currentRotation = rotationConfig.neutral;

    function onMouseMove(event) {
        const mouseY = event.clientY;

        // calculate relative Y position
        const windowHeight = window.innerHeight;
        const relativeY = mouseY / windowHeight; 

        //interpolate rotation
        const rotation = rotationConfig.min + (rotationConfig.max - rotationConfig.min) * relativeY;

        // apply options bool
        const rotateY = invert ? 'rotateY(180deg) ' : '';

        currentRotation = mouseY;

        function lerp(start, end, t) {
            return start + (end - start) * t;
        }

        // Smoothly animate towards target rotation
        targetRotation = lerp(targetRotation, rotation, animateSmoothly);

        // Update element transform
        element.style.transform = `
            ${rotateY} 
            rotateZ(${targetRotation.toFixed(2)}deg)
        `;
    }
    
    window.addEventListener('mousemove', onMouseMove);
}

export default followMouse;