import { Html, OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import { Perf } from "r3f-perf";
import { useRef } from "react";
import * as THREE from "three";

export default function Experience() {
  const playerRef = useRef();
  const hitterRef = useRef();
  const handleJump = () => {
    console.log("clicked");
    playerRef.current.applyImpulse({ x: 5, y: 15, z: 0 });
    playerRef.current.applyTorqueImpulse({ x: 5, y: 15, z: 0 });
  };

  useFrame((state, delta) => {
    const clock = state.clock.getElapsedTime();
    const eulerRotation = new THREE.Euler(0, clock, 0);
    const quaternion = new THREE.Quaternion();
    quaternion.setFromEuler(eulerRotation);
    hitterRef.current.setNextKinematicRotation(quaternion);
  });

  return (
    <>
      <Perf position="top-left" />

      {/* <OrbitControls makeDefault /> */}

      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />

      <Physics gravity={[0, -15, 0]} debug>
        <RigidBody
          colliders={"ball"}
          position={[-2, 2, 0]}
          gravityScale={-0.00001}
        >
          <mesh castShadow>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
          <Html transform>
            <h1 className="text-2xl">ball helio</h1>
          </Html>
        </RigidBody>

        <RigidBody
          colliders={"ball"}
          position={[-2, 10, 0]} // NEVER ANIMATE THE POSITION AND THE ROTATION OF A RIGIDBODY, THIS COULD CREATE A ISSUE IN THE PHYSICS
          restitution={1}
          friction={0.7}
        >
          <mesh castShadow>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
          </mesh>
          <Html transform>
            <h1 className="text-2xl">ball bouncer</h1>
          </Html>
        </RigidBody>

        <RigidBody
          type="kinematicPosition"
          friction={0}
          position={[0, 0, 0]}
          ref={hitterRef}
        >
          <mesh castShadow receiveShadow>
            <boxGeometry args={[18, 0.5, 0.5]}></boxGeometry>
            <meshStandardMaterial color={"blue"}></meshStandardMaterial>

            <Html transform>
              <h1 className="text-2xl">fix body to hit everyone!!!</h1>
            </Html>
          </mesh>
        </RigidBody>

        <RigidBody position={[2, 2, -5]}>
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
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
          <Html transform>
            <h1 className="text-2xl">box with mass</h1>
          </Html>
        </RigidBody>

        <RigidBody position={[-4, 2, 0]}>
          <mesh castShadow>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="mediumpurple" />
          </mesh>
        </RigidBody>

        <RigidBody position={[10, 1, 10]} ref={playerRef} colliders={false}>
          <CuboidCollider mass={10} args={[0.5, 1.5, 0.5]}></CuboidCollider>
          <mesh castShadow onClick={handleJump}>
            <boxGeometry args={[1, 3, 1]} />
            <meshStandardMaterial color="red" />
          </mesh>
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
