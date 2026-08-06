"use client";

import { forwardRef, useEffect, useMemo, useRef } from "react";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";
import { RoundedBox, useTexture } from "@react-three/drei";
import type { CardFaceSet } from "./cpc-theme";

interface CPC3DCardProps {
    faces: CardFaceSet;
    idle: boolean;
}

const CARD_WIDTH = 4.2;
const CARD_HEIGHT = 2.65;
const CARD_THICKNESS = 0.09;

function useFaceTexture(src: string) {
    const texture = useTexture(src);
    useEffect(() => {
        texture.colorSpace = THREE.SRGBColorSpace;
        texture.anisotropy = 16;
        texture.needsUpdate = true;
    }, [texture]);
    return texture;
}

const CPC3DCard = forwardRef<THREE.Group, CPC3DCardProps>(function CPC3DCard({ faces, idle }, ref) {
    const localGroup = useRef<THREE.Group>(null);
    const frontTexture = useFaceTexture(faces.front);
    const backTexture = useFaceTexture(faces.back);

    const bodyMaterial = useMemo(
        () =>
            new THREE.MeshPhysicalMaterial({
                color: "#141416",
                roughness: 0.32,
                metalness: 0.55,
                clearcoat: 0.6,
                clearcoatRoughness: 0.25,
            }),
        []
    );

    useFrame((state) => {
        const group = localGroup.current;
        if (!group || !idle) return;
        const t = state.clock.getElapsedTime();
        group.position.y = Math.sin(t * 0.9) * 0.035;
        group.rotation.z = Math.sin(t * 0.6) * 0.006;
    });

    return (
        <group
            ref={(node) => {
                localGroup.current = node;
                if (typeof ref === "function") ref(node);
                else if (ref) ref.current = node;
            }}
        >
            <RoundedBox
                args={[CARD_WIDTH, CARD_HEIGHT, CARD_THICKNESS]}
                radius={0.14}
                smoothness={6}
                castShadow
                receiveShadow
                material={bodyMaterial}
            />

            <mesh position={[0, 0, CARD_THICKNESS / 2 + 0.001]} castShadow>
                <planeGeometry args={[CARD_WIDTH - 0.06, CARD_HEIGHT - 0.06]} />
                <meshPhysicalMaterial
                    map={frontTexture}
                    roughness={0.22}
                    metalness={0.1}
                    clearcoat={0.9}
                    clearcoatRoughness={0.15}
                    toneMapped={false}
                />
            </mesh>

            <mesh position={[0, 0, -(CARD_THICKNESS / 2 + 0.001)]} rotation={[0, Math.PI, 0]} castShadow>
                <planeGeometry args={[CARD_WIDTH - 0.06, CARD_HEIGHT - 0.06]} />
                <meshPhysicalMaterial
                    map={backTexture}
                    roughness={0.22}
                    metalness={0.1}
                    clearcoat={0.9}
                    clearcoatRoughness={0.15}
                    toneMapped={false}
                />
            </mesh>

            <mesh position={[0, CARD_HEIGHT / 2 + 0.001, 0]}>
                <boxGeometry args={[CARD_WIDTH - 0.3, 0.02, CARD_THICKNESS + 0.01]} />
                <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
            </mesh>

            <mesh position={[0, -(CARD_HEIGHT / 2 + 0.001), 0]}>
                <boxGeometry args={[CARD_WIDTH - 0.3, 0.02, CARD_THICKNESS + 0.01]} />
                <meshStandardMaterial color="#d4af37" metalness={0.9} roughness={0.2} />
            </mesh>
        </group>
    );
});

export default CPC3DCard;