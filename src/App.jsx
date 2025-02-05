import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import {
  GizmoHelper,
  GizmoViewport,
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";
import { DirectionalLightHelper, SpotLightHelper, CameraHelper } from "three";
import { useControls } from "leva";
const Cube = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y -= delta * 5;
    ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 10;
    console.log(delta);
  });
  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

const Sphere = ({ position, size, color }) => {
  const ref = useRef();

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    const speed = isHovered ? 1 : 0.2;
    ref.current.rotation.y -= delta * speed;
  });
  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={(event) => setIsHovered(false)}
      onClick={(event) => setIsClicked(!isClicked)}
      scale={isClicked ? 1.5 : 1}
      castShadow
    >
      <sphereGeometry args={size} />
      <MeshDistortMaterial
        factor={1}
        speed={2}
        color={isHovered ? "lightBlue" : color}
      />
    </mesh>
  );
};

const Torus = ({ position, size, color }) => {
  const ref = useRef();
  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y -= delta * 5;
    ref.current.position.z = Math.sin(state.clock.getElapsedTime()) * 2;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusGeometry args={size} />
      <meshStandardMaterial color={color} wireframe />
    </mesh>
  );
};

const DirectLight = () => {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper, 2, "cyan");

  const shadowRef = useRef();
  useHelper(shadowRef, CameraHelper);
  return (
    <directionalLight
      color="white"
      ref={lightRef}
      position={[-5, 8, 1]}
      intensity={1}
      castShadow
    >
      <orthographicCamera attach="shawdow-camera" ref={shadowRef} />
    </directionalLight>
  );
};

const SpotLight = ({ position, color }) => {
  const ref = useRef();

  const { angle, penumbra } = useControls({
    angle: {
      value: Math.PI / 4,
      min: 0,
      max: Math.PI,
      step: 0.1,
    },
    penumbra: {
      value: 1,
      min: 0,
      max: 1,
      step: 0.1,
    },
  });

  useHelper(ref, SpotLightHelper, "hotPink");
  return (
    <spotLight
      position={position}
      angle={angle}
      penumbra={penumbra}
      color={color}
      intensity={5}
      ref={ref}
    />
  );
};
const PointLight = ({ position }) => {
  const ref = useRef();
  const { distance, decay, color } = useControls({
    distance: {
      value: 10,
      min: 0,
      max: 100,
      step: 1,
    },
    decay: {
      value: 1,
      min: 0,
      max: 2,
      step: 0.1,
    },
    color: "white",
  });
  return (
    <pointLight
      position={position}
      color={color}
      intensity={1}
      distance={distance}
      decay={decay}
      ref={ref}
    />
  );
};
const TorusKnot = ({ position, size }) => {
  const ref = useRef();
  const { color, radius, speed } = useControls({
    color: "hotpink",
    radius: {
      value: 5,
      min: 1,
      max: 10,
      step: 0.5,
    },
    speed: {
      value: 1,
      min: 0,
      max: 4,
      step: 0.1,
    },
  });
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    ref.current.rotation.y -= delta * speed;
  });

  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={[radius, ...size]} />
      <MeshWobbleMaterial color={color} wireframe />
    </mesh>
  );
};
const Scene = () => {
  <DirectLight />;

  return (
    <>
      <SpotLight position={[0, 2, 1]} color="white" />
      {/* <TorusKnot position={[0, 0, 0]} size={[0.1, 1000, 50]} /> */}
      <Sphere position={[0, 0, 0]} size={[1, 32, 20]} />
      <OrbitControls enableZoom={false} />
      <axesHelper args={[1]} />
      <gridHelper args={[10, 10]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial />
      </mesh>
    </>
  );
};
function App() {
  return (
    <Canvas shadows className="canvas">
      <Scene />
    </Canvas>
  );
}
export default App;
