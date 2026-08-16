import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;

    // Scene
    const scene = new THREE.Scene();
    scene.background = null;

    // Camera
    const camera = new THREE.PerspectiveCamera(
      60,
      el.clientWidth / el.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    // Colors from palette
    const palette = [0xbe5103, 0xffce1b, 0x069494, 0xb7410e, 0xf8f4ef];

    // ── 1. Wireframe rotating torus knot ──
    const knotGeo = new THREE.TorusKnotGeometry(1.1, 0.35, 128, 16);
    const knotMat = new THREE.MeshBasicMaterial({
      color: 0xffce1b,
      wireframe: true,
    });
    const knot = new THREE.Mesh(knotGeo, knotMat);
    scene.add(knot);

    // ── 2. Floating icosahedra ──
    const floaters = [];
    for (let i = 0; i < 18; i++) {
      const geo = new THREE.IcosahedronGeometry(Math.random() * 0.18 + 0.06, 0);
      const mat = new THREE.MeshBasicMaterial({
        color: palette[Math.floor(Math.random() * palette.length)],
        wireframe: Math.random() > 0.4,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 5,
        (Math.random() - 0.5) * 3
      );
      mesh.userData = {
        speedX: (Math.random() - 0.5) * 0.008,
        speedY: (Math.random() - 0.5) * 0.008,
        rotX: Math.random() * 0.02,
        rotY: Math.random() * 0.02,
      };
      scene.add(mesh);
      floaters.push(mesh);
    }

    // ── 3. Grid of dots (points) ──
    const pts = [];
    for (let x = -4; x <= 4; x += 0.8) {
      for (let y = -3.5; y <= 3.5; y += 0.8) {
        pts.push(new THREE.Vector3(x, y, -2));
      }
    }
    const ptGeo = new THREE.BufferGeometry().setFromPoints(pts);
    const ptMat = new THREE.PointsMaterial({
      color: 0xb7410e,
      size: 0.04,
    });
    const points = new THREE.Points(ptGeo, ptMat);
    scene.add(points);

    // Mouse parallax
    let mx = 0, my = 0;
    const onMouse = (e) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2;
      my = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", onMouse);

    // Animation
    let frame;
    const clock = new THREE.Clock();
    const animate = () => {
      frame = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      knot.rotation.x = t * 0.18 + mx * 0.3;
      knot.rotation.y = t * 0.22 + my * 0.3;

      floaters.forEach((f) => {
        f.rotation.x += f.userData.rotX;
        f.rotation.y += f.userData.rotY;
        f.position.y += Math.sin(t + f.position.x) * 0.003;
        f.position.x += Math.cos(t + f.position.y) * 0.002;
      });

      points.rotation.z = t * 0.04;
      camera.position.x += (mx * 0.4 - camera.position.x) * 0.04;
      camera.position.y += (my * 0.3 - camera.position.y) * 0.04;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    // Resize
    const onResize = () => {
      if (!el) return;
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="three-canvas" />;
}
