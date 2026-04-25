import * as THREE from "three";
import { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Billboard, useTexture } from "@react-three/drei";
import { EffectComposer, N8AO } from "@react-three/postprocessing";
import { BallCollider, Physics, RigidBody, RapierRigidBody } from "@react-three/rapier";

const DEBUG = false; // 👈 SET true for debug

// ✅ Tech stack names (must match file names)
const techStack = [
  "anaconda",
  "arduino",
  "copilot",
  "esp32",
  "exchange",
  "gsuit",
  "iot",
  "jupyter",
  "micropython",
  "o365",
  "powerapps",
  "powerautomate",
  "powershell",
  "python",
  "raspberry_pi",
  "robot",
  "slack",
  "teams"
];

// ✅ Handle mixed image formats
function getTexturePath(name: string) {
  if (name === "raspberry_pi") return `/icons/${name}.jpg`;
  if (name === "python") return `/icons/${name}.webp`;
  if (name === "esp32") return `/icons/${name}.webp`;
  return `/icons/${name}.png`;
}

// ✅ Random spheres
const spheres = [...Array(30)].map(() => ({
  scale: [0.8, 1, 1.2][Math.floor(Math.random() * 3)],
}));

// ======================
// 🔮 Sphere Component
// ======================
function SphereGeo({ scale, isActive, name }: { scale: number; isActive: boolean; name: string }) {
  const api = useRef<RapierRigidBody>(null);
  const vec = new THREE.Vector3();

  const texturePath = getTexturePath(name);
  const texture = useTexture(texturePath);

  texture.colorSpace = THREE.SRGBColorSpace;

  useFrame((_, delta) => {
    if (!isActive || !api.current) return;

    delta = Math.min(0.1, delta);

    const impulse = vec
      .copy(api.current.translation())
      .normalize()
      .multiplyScalar(-50 * delta * scale);

    api.current.applyImpulse(impulse, true);
  });

  return (
    <RigidBody
      ref={api}
      linearDamping={0.7}
      angularDamping={0.2}
      friction={0.2}
      position={[
        THREE.MathUtils.randFloatSpread(20),
        THREE.MathUtils.randFloatSpread(20) - 20,
        THREE.MathUtils.randFloatSpread(20),
      ]}
      colliders={false}
    >
      <BallCollider args={[scale]} />

      {/* 🔮 Glass Sphere */}
      <mesh scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhysicalMaterial
          color="#ffffff"
          transparent
          opacity={0.12}
          transmission={1}
          roughness={0}
          clearcoat={1}
          depthWrite={false}
        />
      </mesh>

      {/* 🌟 Glow */}
      <mesh scale={scale * 1.15}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial color="#00f5ff" transparent opacity={0.08} />
      </mesh>

      {/* 🧠 Logo */}
      <Billboard>
        <mesh scale={scale * 0.9} position={[0, 0, 0]}>
          <planeGeometry args={[1.6, 1.6]} />

          {DEBUG ? (
            <meshBasicMaterial color="red" />
          ) : (
            <meshBasicMaterial
              map={texture}
              alphaTest={0.5}
              toneMapped={false}
            />
          )}
        </mesh>
      </Billboard>
    </RigidBody>
  );
}

// ======================
// 🖱 Pointer Interaction
// ======================
function Pointer({ isActive }: { isActive: boolean }) {
  const ref = useRef<RapierRigidBody>(null);
  const vec = new THREE.Vector3();

  useFrame(({ pointer, viewport }) => {
    if (!isActive || !ref.current) return;

    vec.set(
      (pointer.x * viewport.width) / 2,
      (pointer.y * viewport.height) / 2,
      0
    );

    ref.current.setNextKinematicTranslation(vec);
  });

  return (
    <RigidBody type="kinematicPosition" ref={ref} colliders={false}>
      <BallCollider args={[2]} />
    </RigidBody>
  );
}

// ======================
// 🚀 Main Component
// ======================
export default function TechStack() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("work");
      if (!section) return;

      const trigger = section.getBoundingClientRect().top;
      setIsActive(trigger < window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="techstack">
      <h2>Tools & Systems</h2>

      <Canvas camera={{ position: [0, 0, 20], fov: 35 }}>
        {/* 💡 Lights */}
        <ambientLight intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={2} />

        {/* ⚛ Physics */}
        <Suspense fallback={null}>
          <Physics gravity={[0, 0, 0]}>
            <Pointer isActive={isActive} />

            {spheres.map((s, i) => (
              <SphereGeo
                key={i}
                scale={s.scale}
                name={techStack[i % techStack.length]}
                isActive={isActive}
              />
            ))}
          </Physics>
        </Suspense>

        {/* 🌆 Environment */}
        <Environment preset="city" />

        {/* 🎨 Post Processing */}
        <EffectComposer>
          <N8AO intensity={1} aoRadius={2} />
        </EffectComposer>
      </Canvas>
    </div>
  );
}