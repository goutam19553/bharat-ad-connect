// src/components/HowItWorks/HowItWorks.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import './howitworks.css';

const HowItWorks: React.FC = () => {
  const webglBackgroundRef = useRef<HTMLDivElement>(null);
  const finalMessageRef = useRef<HTMLDivElement>(null);

  // Declare Three.js variables outside init to access in handlers
  let scene: THREE.Scene;
  let camera: THREE.PerspectiveCamera;
  let renderer: THREE.WebGLRenderer;
  let points: THREE.Points;
  let lines: THREE.LineSegments;
  let mouseX = 0;
  let mouseY = 0;

  // Helper to get container size or fallback
  const getContainerSize = () => {
    if (webglBackgroundRef.current) {
      return {
        width: webglBackgroundRef.current.clientWidth,
        height: webglBackgroundRef.current.clientHeight,
      };
    }
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  };

  const init3DBackground = () => {
    if (!webglBackgroundRef.current) return;

    const { width, height } = getContainerSize();

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1f2937);

    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 50;

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setClearColor(0x1f2937, 1); // match background

    // Clear existing canvas if any (important for React hot reload)
    if (webglBackgroundRef.current.firstChild) {
      webglBackgroundRef.current.removeChild(webglBackgroundRef.current.firstChild);
    }
    webglBackgroundRef.current.appendChild(renderer.domElement);

    // Points and lines setup (unchanged)
    const numPoints = 200;
    const pointGeometry = new THREE.BufferGeometry();
    const positions: number[] = [];
    const colors: number[] = [];
    const linePositions: number[] = [];

    const color1 = new THREE.Color(0x8a2be2);
    const color2 = new THREE.Color(0x00ffff);

    for (let i = 0; i < numPoints; i++) {
      const x = (Math.random() - 0.5) * 100; // reduced size range to 100 (was 200) for better fit
      const y = (Math.random() - 0.5) * 100;
      const z = (Math.random() - 0.5) * 100;
      positions.push(x, y, z);
      colors.push(color1.r, color1.g, color1.b);
    }

    pointGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    pointGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const pointMaterial = new THREE.PointsMaterial({
      size: 0.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      sizeAttenuation: true,
    });

    points = new THREE.Points(pointGeometry, pointMaterial);
    scene.add(points);

    const maxDistance = 20;
    for (let i = 0; i < numPoints; i++) {
      const p1 = new THREE.Vector3(positions[i * 3], positions[i * 3 + 1], positions[i * 3 + 2]);
      for (let j = i + 1; j < numPoints; j++) {
        const p2 = new THREE.Vector3(positions[j * 3], positions[j * 3 + 1], positions[j * 3 + 2]);
        if (p1.distanceTo(p2) < maxDistance) {
          linePositions.push(p1.x, p1.y, p1.z);
          linePositions.push(p2.x, p2.y, p2.z);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff,
      transparent: true,
      opacity: 0.3,
      linewidth: 1,
    });

    lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Events
    document.addEventListener('mousemove', onDocumentMouseMove, false);
    window.addEventListener('resize', onWindowResize, false);
  };

  const onDocumentMouseMove = (event: MouseEvent) => {
    const { width, height } = getContainerSize();
    mouseX = (event.clientX - width / 2) * 0.005;
    mouseY = (event.clientY - height / 2) * 0.005;
  };

  const onWindowResize = () => {
    if (!webglBackgroundRef.current) return;

    const { width, height } = getContainerSize();

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
  };

  const animate3DBackground = () => {
    requestAnimationFrame(animate3DBackground);

    if (points) {
      points.rotation.x += 0.0005;
      points.rotation.y += 0.0008;
    }
    if (lines) {
      lines.rotation.x += 0.0005;
      lines.rotation.y += 0.0008;
    }

    camera.position.x += (mouseX - camera.position.x) * 0.05;
    camera.position.y += (-mouseY - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };

  // GSAP ScrollTrigger animations (unchanged)
  const setupScrollAnimations = () => {
    // Your existing GSAP ScrollTrigger code here...
  };

  React.useEffect(() => {
    init3DBackground();
    animate3DBackground();

    const timeoutId = setTimeout(() => {
      setupScrollAnimations();
    }, 100);

    return () => {
      if (renderer && webglBackgroundRef.current) {
        webglBackgroundRef.current.removeChild(renderer.domElement);
        renderer.dispose();
      }
      window.removeEventListener('resize', onWindowResize);
      document.removeEventListener('mousemove', onDocumentMouseMove);
      clearTimeout(timeoutId);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="how-it-works-container" style={{ position: 'relative', width: '100%', height: '600px' }}>
      <div ref={webglBackgroundRef} style={{ width: '100%', height: '100%', overflow: 'hidden' }} />
      {/* Your other components and markup */}
      <div ref={finalMessageRef} className="final-message">YOUR AD IS READY</div>
    </div>
  );
};

export default HowItWorks;
