import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';

function StarBackground(props) {
    const ref = useRef();
    const sphere = useMemo(() => {
        const points = new Float32Array(5000);
        for (let i = 0; i < 5000; i++) {
            points[i] = (Math.random() - 0.5) * 2;
        }
        return points;
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color="#06b6d4"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

const ThreeScene = () => {
    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default ThreeScene;
