import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

// Model Component
const Model = () => {
  const gltf = useLoader(GLTFLoader, "/scene.gltf"); // Ensure the path matches your public folder
  return <primitive object={gltf.scene} scale={0.4} />;
};

// App Component
export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden", margin: 0 }}>
      <Canvas
        camera={{ position: [0, 2, 5], fov: 50 }}
        gl={{ alpha: true }}
        style={{ background: "transparent" }} // Ensures transparency
      >
        <Suspense fallback={<div>Loading...</div>}>
          <Model />
          <OrbitControls enableZoom={true} />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
}
