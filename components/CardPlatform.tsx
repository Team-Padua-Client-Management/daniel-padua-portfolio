"use client";

import { MeshReflectorMaterial } from "@react-three/drei";

const PLATFORM_RADIUS = 2.6;
const RING_INNER_RADIUS = 2.4;
const RING_OUTER_RADIUS = 2.63;

export default function CardPlatform() {
    return (
        <group position={[0, -1.15, 0]}>
            <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
                <circleGeometry args={[PLATFORM_RADIUS, 64]} />
                <MeshReflectorMaterial
                    blur={[300, 100]}
                    resolution={1024}
                    mixBlur={1}
                    mixStrength={35}
                    roughness={1}
                    depthScale={1.2}
                    minDepthThreshold={0.4}
                    maxDepthThreshold={1.4}
                    color="#0a0a0a"
                    metalness={0.6}
                    mirror={0.35}
                />
            </mesh>

            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.002, 0]}>
                <ringGeometry args={[RING_INNER_RADIUS, RING_OUTER_RADIUS, 64]} />
                <meshBasicMaterial color="#d4af37" transparent opacity={0.5} />
            </mesh>

            <pointLight position={[0, 0.4, 0]} intensity={0.5} color="#f5d98b" distance={4} decay={2} />
        </group>
    );
}