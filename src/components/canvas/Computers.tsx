import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import { FC, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import CanvasLoader from "../Loader";

const Computers: FC = () => {
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <primitive object={computer.scene} scale={2} position={[0, -4.5, -1.5]} />
    </mesh>
  );
};

const ComputersCanvas: FC = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fow: 25 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
