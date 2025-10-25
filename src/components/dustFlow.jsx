/**
 * Renders a dust particle flow effect using React Three Fiber.
 * Creates a canvas with animated particles that rotate slowly, simulating a dust flow.
 * The particles are positioned randomly in 3D space and use a circular texture.
 * 
 * @param {Object} props - The component props.
 * @param {number} [props.particleCount=1000] - The number of dust particles to generate and render.
 * @returns {JSX.Element} The DustFlow component, which includes a full-screen Canvas with dust particles.
 */
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DustFlow({ particleCount = 1000 }) {
    const DustParticles = () => {
        // Ref for the particles
        const particlesRef = useRef();

        // Generate particle positions end get particle count
        const particlesCount = particleCount;
        const particlesPosition = useMemo(() => {
            const positions = [];
            for (let i = 0; i < particlesCount; i++) {
                positions.push((Math.random() - 0.5) * 20); // x
                positions.push((Math.random() - 0.5) * 20); // y
                positions.push((Math.random() - 0.5) * 20); // z
            }
            return new Float32Array(positions);
        }, [particlesCount]);
            
        // create curcular particule
        const circleTexture = useMemo(() => {
            const size = 64;
            const canvas = document.createElement('canvas');
            canvas.width = size;
            canvas.height = size;
            const ctx = canvas.getContext('2d');
            ctx.clearRect(0, 0, size, size);
            ctx.beginPath();
            ctx.arc(size / 2, size / 2, size / 2, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = 'white';
            ctx.fill();
            const texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;
        }, []);

        // Animate particles rotation
        useFrame(() => {
            if (particlesRef.current) {
                particlesRef.current.rotation.y += 0.001;
                particlesRef.current.rotation.x += 0.0005;
            }
        });

        // Create the particles system
        return (
            <points ref={particlesRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particleCount}
                        array={particlesPosition}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.06}
                    sizeAttenuation={true}
                    color={new THREE.Color().setRGB(0.5, 0.5, 0.5)}
                    transparent={true}
                    opacity={0.5}
                    map={circleTexture}
                    alphaTest={0.01}
                />
            </points>
                         
        );
    };

    // Render the Canvas with DustParticles
    return (
        <Canvas
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: -1 }}
            camera={{ position: [0, 0, 10], fov: 75 }}>
        >
            <DustParticles />
        </Canvas>
    );
}

export default DustFlow;