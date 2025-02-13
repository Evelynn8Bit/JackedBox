import { Canvas, useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { MeshWobbleMaterial, OrbitControls } from "@react-three/drei";
import { useControls } from "leva";
import { DirectLight, SpotLight, PointLight } from "./Lights";
import { UI } from "./UI";

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
      <meshStandardMaterial />
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
      <Sphere position={[0, 0, 0]} size={[1, 32, 20]} />
      <axesHelper args={[1]} />
      <gridHelper args={[10, 10]} />
      <planeGeometry args={[100, 100]} receiveShadow />
      <meshStandardMaterial />
      <DirectLight name={"direct light 1"} />
    </>
  );
};
function App() {
  return (
    <>
      <UI />

      <Canvas shadows className="canvas">
        <Scene />
      </Canvas>
    </>
  );
}
export default App;
