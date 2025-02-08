import { useRef } from "react";
import { useControls } from "leva";
import { useHelper } from "@react-three/drei";
import { DirectionalLightHelper, SpotLightHelper, CameraHelper } from "three";

const DirectLight = ({ name }) => {
  const lightRef = useRef();
  useHelper(lightRef, DirectionalLightHelper, 2, "cyan");
  const { position, color, intensity, visible, castShadow } = useControls(
    name,
    {
      position: {
        value: [0, 0, 10],
      },
      color: "white",
      intensity: {
        value: 1,
        min: 0,
        max: 2,
        step: 0.1,
      },
      visible: true,
      castShadow: true,
    }
  );
  const shadowRef = useRef();
  useHelper(shadowRef, CameraHelper);
  return (
    <directionalLight
      name={name}
      position={position}
      intensity={intensity}
      color={color}
      shadow-mapSize={[1024, 1024]}
      ref={lightRef}
      visible={visible}
      castShadow={castShadow}
    >
      <orthographicCamera attach="shadow-camera" args={[-10, 10, 10, -10]} />+{" "}
    </directionalLight>
  );
};

const SpotLight = ({ name }) => {
  const ref = useRef();

  const {
    power,
    angle,
    penumbra,
    position,
    visible,
    color,
    intensity,
    castShadow,
    decay,
    distance,
    collapse,
  } = useControls(name, {
    position: {
      value: [0, 3, 1],
    },
    color: "white",
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
    distance: {
      value: 25,
      min: 0,
      max: 50,
      step: 1,
    },
    intensity: {
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
    },
    power: {
      value: 250,
      min: 0,
      max: 500,
      step: 10,
    },
    decay: {
      value: 2,
      min: 0,
      max: 2,
      step: 0.1,
    },
    visible: true,
    castShadow: true,
  });

  useHelper(ref, SpotLightHelper, "hotPink");
  return (
    <>
      <spotLight
        name={name}
        position={position}
        visible={visible}
        angle={angle}
        penumbra={penumbra}
        color={color}
        intensity={intensity}
        ref={ref}
        castShadow={castShadow}
        power={power}
        decay={decay}
        distance={distance}
      />
    </>
  );
};
const PointLight = ({ name }) => {
  const ref = useRef();
  const {
    distance,
    decay,
    color,
    position,
    visible,
    castShadow,
    intensity,
    power,
  } = useControls(name, {
    position: {
      value: [0, 5, 0],
    },
    color: "pink",
    intensity: {
      value: 5,
      min: 0,
      max: 10,
      step: 0.1,
    },
    power: {
      value: 250,
      min: 0,
      max: 500,
      step: 10,
    },
    distance: {
      value: 20,
      min: 0,
      max: 100,
      step: 1,
    },
    decay: {
      value: 0,
      min: 0,
      max: 2,
      step: 0.1,
    },
    visible: true,
    castShadow: true,
  });
  return (
    <pointLight
      position={position}
      color={color}
      power={power}
      intensity={intensity}
      distance={distance}
      decay={decay}
      ref={ref}
      visible={visible}
      castShadow={castShadow}
      name={name}
    />
  );
};

export { DirectLight, SpotLight, PointLight };
