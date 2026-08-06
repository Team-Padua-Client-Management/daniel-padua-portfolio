"use client";

import { Suspense, useCallback, useRef, useState } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { Environment, ContactShadows, OrbitControls } from "@react-three/drei";
import type { OrbitControls as OrbitControlsImpl } from "three-stdlib";
import * as THREE from "three";
import CPC3DCard from "./CPC3DCard";
import CardPlatform from "./CardPlatform";
import CardGlow from "./CardGlow";
import CardControls from "./CardControls";
import type { CardFaceSet } from "./cpc-theme";

interface CPCStageProps {
    faces: CardFaceSet;
}

const DEFAULT_DISTANCE = 7.5;
const MIN_DISTANCE = 5;
const MAX_DISTANCE = 10.5;

function ZoomHandler({
    controlsRef,
    zoomTrigger,
}: {
    controlsRef: React.RefObject<OrbitControlsImpl | null>;
    zoomTrigger: { direction: 1 | -1; token: number } | null;
}) {
    const { camera } = useThree();
    const lastToken = useRef(0);

    if (zoomTrigger && zoomTrigger.token !== lastToken.current) {
        lastToken.current = zoomTrigger.token;
        const controls = controlsRef.current;
        if (controls) {
            const target = controls.target as THREE.Vector3;
            const offset = camera.position.clone().sub(target);
            const distance = offset.length();
            const nextDistance = THREE.MathUtils.clamp(
                distance + zoomTrigger.direction * 0.8,
                MIN_DISTANCE,
                MAX_DISTANCE
            );
            offset.setLength(nextDistance);
            camera.position.copy(target.clone().add(offset));
            controls.update();
        }
    }

    return null;
}

export default function CPCStage({ faces }: CPCStageProps) {
    const [isHovered, setIsHovered] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const [autoRotate, setAutoRotate] = useState(true);
    const [lightingWarm, setLightingWarm] = useState(false);
    const [zoomTrigger, setZoomTrigger] = useState<{ direction: 1 | -1; token: number } | null>(null);
    const [resetToken, setResetToken] = useState(0);

    const controlsRef = useRef<OrbitControlsImpl | null>(null);

    const handleReset = useCallback(() => {
        const controls = controlsRef.current;
        if (controls) {
            controls.reset();
        }
        setResetToken((t) => t + 1);
    }, []);

    const handleZoom = useCallback((direction: 1 | -1) => {
        setZoomTrigger({ direction, token: Date.now() });
    }, []);

    return (
        <div className="w-full">
            <div
                className="relative w-full aspect-[4/3] max-h-[640px] overflow-hidden rounded-[28px] border border-[#ECECEC] bg-white shadow-xl select-none"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(212,175,55,0.10)_0%,_rgba(212,175,55,0)_70%)]" />

                <CardGlow isHovered={isHovered} isDragging={isDragging} />

                <div className="absolute left-6 top-6 z-10 flex items-center gap-2 rounded-full border border-[#ECECEC] bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
                    <span className="relative flex h-1.5 w-1.5">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </span>
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#6B7280]">Live Preview</span>
                </div>

                <div className="absolute right-6 top-6 z-10 rounded-full border border-[#ECECEC] bg-white/90 px-3 py-1.5 shadow-sm backdrop-blur-md">
                    <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-[#D4AF37]">Drag to Rotate</span>
                </div>

                <Canvas
                    key={resetToken}
                    shadows
                    gl={{ alpha: true, antialias: true }}
                    camera={{ position: [0, 0.4, DEFAULT_DISTANCE], fov: 32 }}
                    onPointerDown={() => setIsDragging(true)}
                    onPointerUp={() => setIsDragging(false)}
                >
                    <ambientLight intensity={lightingWarm ? 1.6 : 1} />
                    <directionalLight position={[5, 5, 5]} intensity={lightingWarm ? 2.2 : 1.4} castShadow />
                    <directionalLight position={[-5, 3, 5]} intensity={lightingWarm ? 1.2 : 0.8} />

                    <Suspense fallback={null}>
                        <CPC3DCard faces={faces} idle={!isDragging} />
                        <CardPlatform />
                        <ContactShadows position={[0, -1.14, 0]} opacity={0.28} scale={8} blur={2.6} far={2} />
                        <Environment preset={lightingWarm ? "apartment" : "city"} />
                    </Suspense>

                    <OrbitControls
                        ref={controlsRef}
                        enablePan={false}
                        enableDamping
                        dampingFactor={0.08}
                        minDistance={MIN_DISTANCE}
                        maxDistance={MAX_DISTANCE}
                        minPolarAngle={Math.PI / 3}
                        maxPolarAngle={Math.PI / 1.7}
                        autoRotate={autoRotate && !isDragging}
                        autoRotateSpeed={1.1}
                    />

                    <ZoomHandler controlsRef={controlsRef} zoomTrigger={zoomTrigger} />
                </Canvas>
            </div>

            <div className="mt-6">
                <CardControls
                    autoRotate={autoRotate}
                    onToggleAutoRotate={() => setAutoRotate((v) => !v)}
                    onReset={handleReset}
                    onZoomIn={() => handleZoom(-1)}
                    onZoomOut={() => handleZoom(1)}
                    lightingWarm={lightingWarm}
                    onToggleLighting={() => setLightingWarm((v) => !v)}
                />
            </div>
        </div>
    );
}