import { FC, Suspense, useRef } from "react";
import * as random from "maath/random";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Preload } from "@react-three/drei";
import {
  BufferGeometry,
  Material,
  NormalBufferAttributes,
  Points as PointsT,
} from "three";

import CanvasLoader from "../Loader";

const Stars: FC = (props) => {
  const ref =
    useRef<
      PointsT<BufferGeometry<NormalBufferAttributes>, Material | Material[]>
    >(null);

  const sphere = random.inSphere(new Float32Array(5000) as Float32Array, {
    radius: 1.2,
  }) as Float32Array;

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: FC = () => {
  return (
    <div className="w-full h-full absolute inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={<CanvasLoader />}>
          <Stars />
        </Suspense>

        <Preload all />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
