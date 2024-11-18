import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <mesh castShadow position={[-2, 2, 0]}>
        <sphereGeometry />
        <meshStandardMaterial color="orange" />
      </mesh>

      <mesh castShadow position={[2, 2, 0]}>
        <boxGeometry />
        <meshStandardMaterial color="mediumpurple" />
      </mesh>

      <mesh receiveShadow position-y={-1.25}>
        <boxGeometry args={[30, 0.5, 30]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <mesh receiveShadow position={[15, 0, 0]}>
        <boxGeometry args={[1, 3, 30]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <mesh receiveShadow position={[-15, 0, 0]}>
        <boxGeometry args={[1, 3, 30]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <mesh receiveShadow position={[0, 0, 15]}>
        <boxGeometry args={[30, 3, 1]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
      <mesh receiveShadow position={[0, 0, -15]}>
        <boxGeometry args={[30, 3, 1]} />
        <meshStandardMaterial color="greenyellow" />
      </mesh>
    </>
  );
}
