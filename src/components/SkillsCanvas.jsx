import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SkillsCanvas() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, el.clientWidth / el.clientHeight, 0.1, 100);
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(el.clientWidth, el.clientHeight);
    el.appendChild(renderer.domElement);

    // Hexagonal grid of lines
    const group = new THREE.Group();
    scene.add(group);

    const lineMat = new THREE.LineBasicMaterial({ color: 0x069494, transparent: true, opacity: 0.25 });

    for (let i = 0; i < 60; i++) {
      const geo = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 2),
        new THREE.Vector3((Math.random() - 0.5) * 8, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 2),
      ]);
      group.add(new THREE.Line(geo, lineMat));
    }

    // Small teal spheres
    for (let i = 0; i < 30; i++) {
      const g = new THREE.SphereGeometry(0.04, 6, 6);
      const m = new THREE.MeshBasicMaterial({ color: 0xffce1b });
      const mesh = new THREE.Mesh(g, m);
      mesh.position.set((Math.random()-0.5)*8, (Math.random()-0.5)*6, (Math.random()-0.5)*2);
      group.add(mesh);
    }

    let frame;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();
      group.rotation.y = t * 0.06;
      group.rotation.x = Math.sin(t * 0.04) * 0.15;
      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{
        position: "fixed", inset: 0, zIndex: 0,
        pointerEvents: "none", opacity: 0.6,
      }}
    />
  );
}
