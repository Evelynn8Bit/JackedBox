import { createRoot } from "react-dom/client";
import { Canvas } from "@react-three/fiber";
import "./main.css";
function App() {
  return (
    <Canvas className="canvas">
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshBasicMaterial color="hotpink" />
      </mesh>
    </Canvas>
  );
}

createRoot(document.getElementById("root")).render(<App />);
