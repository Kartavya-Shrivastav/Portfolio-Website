import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useMediaQuery } from "react-responsive";

import { Room } from "./Room";
import HeroLights from "./HeroLights";
import Particles from "./Particles";
import { Suspense } from "react";
import { useEffect } from "react";
import { useThree } from "@react-three/fiber";

const Cleanup = () => {
  const { gl } = useThree();

  useEffect(() => {
    return () => {
      gl.dispose();
    };
  }, [gl]);

  return null;
};

const HeroExperience = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const isLarge = useMediaQuery({ query: "(min-width: 1400px)" });

  return (
      <Canvas 
        style={{ width: "100%", height: "100%"}}
        dpr={[1, 1.5]}
        frameloop="demand"
        camera={{ position: [0, 0, 18], fov: 45 }}>
        
        <Cleanup />

        {/* deep blue ambient */}
        <ambientLight intensity={0.2} color="#1a1a40" />
        {/* Configure OrbitControls to disable panning and control zoom based on device type */}
        <OrbitControls
          enablePan={false} // Prevents panning of the scene
          enableZoom={!isTablet} // Disables zoom on tablets
          maxDistance={20} // Maximum distance for zooming out
          minDistance={5} // Minimum distance for zooming in
          minPolarAngle={Math.PI / 5} // Minimum angle for vertical rotation
          maxPolarAngle={Math.PI / 2} // Maximum angle for vertical rotation
        />

        <Suspense fallback={null}>
          <HeroLights />
          <Particles count={180} />
          <group
            scale={
              isMobile ? 0.75 : 
              isTablet ? 0.9 : 
              isLarge ? 1.25 : 1.5
            }
            position={[0, -3.5, 0]}
            rotation={[0, -Math.PI / 4, 0]}
          >
            <Room />
          </group>
        </Suspense>
      </Canvas>
  );
};

export default HeroExperience;
