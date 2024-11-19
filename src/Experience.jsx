import { Html, OrbitControls } from "@react-three/drei";
import { Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";

export default function Experience() {
  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Physics debug>
        <RigidBody colliders={"ball"} position={[-2, 2, 0]}>
          <mesh castShadow>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
          <Html transform>
            <h1 className="text-2xl">ball</h1>
          </Html>
        </RigidBody>

        <RigidBody position={[2, 2, 0]}>
          <mesh castShadow>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
          <Html transform>
            <h1 className="text-2xl">default</h1>
          </Html>
        </RigidBody>

        <RigidBody position={[2, 2, 0]}>
          <mesh castShadow>
            <boxGeometry args={[25, 1, 1]} />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
          <Html transform>
            <h1 className="text-2xl">fix body to hit everyone!!!</h1>
          </Html>
        </RigidBody>

        <RigidBody position={[10, 1, 10]}>
          <mesh castShadow>
            <boxGeometry args={[1, 3, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <Html transform>
            <h1 className="text-2xl">Basic player</h1>
          </Html>
        </RigidBody>

        <RigidBody
          position={[3, 5, 0]}
          rotation={[Math.PI / 8, 0, 0]}
          colliders={"hull"}
        >
          <mesh castShadow>
            <torusGeometry></torusGeometry>
            <meshStandardMaterial color={"red"}></meshStandardMaterial>
          </mesh>
          <Html transform>
            <h1 className="text-2xl">hull</h1>
          </Html>
        </RigidBody>

        <RigidBody
          position={[0, 5, 0]}
          rotation={[Math.PI / 8, 0, 0]}
          colliders={"trimesh"}
        >
          <mesh castShadow>
            <torusGeometry></torusGeometry>
            <meshStandardMaterial color={"red"}></meshStandardMaterial>
          </mesh>
          <Html transform>
            <h1 className="text-2xl">trimesh</h1>
          </Html>
        </RigidBody>

        <RigidBody type="fixed">
          <mesh receiveShadow position-y={-1.25}>
            <boxGeometry args={[30, 0.5, 30]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
          <mesh receiveShadow position={[15, 14, 0]}>
            <boxGeometry args={[1, 30, 30]} />
            <meshStandardMaterial color="red" opacity={0.25} transparent />
          </mesh>
          <mesh receiveShadow position={[-15, 14, 0]}>
            <boxGeometry args={[1, 30, 30]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
          <mesh receiveShadow position={[0, 14, 15]}>
            <boxGeometry args={[30, 30, 1]} />
            <meshStandardMaterial color="red" opacity={0.25} transparent />
          </mesh>
          <mesh receiveShadow position={[0, 14, -15]}>
            <boxGeometry args={[30, 30, 1]} />
            <meshStandardMaterial color="greenyellow" />
          </mesh>
        </RigidBody>
      </Physics>
    </>
  );
}
