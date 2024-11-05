'use client';
import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import TsIcon from '../assets/typescript.png';
import JavaIcon from '../assets/java.png';
import JsIcon from '../assets/javascript.png';
import PyIcon from '../assets/python.png';
import goIcon from '../assets/go.png';
export function Scene() {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;
    
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#121212');
    
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.enablePan = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 2;
    controls.minDistance = 2; 
    controls.maxDistance = 2; 

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const textureLoader = new THREE.TextureLoader();
    const loadTexture = (imageUrl: string) => {
      return new Promise((resolve) => {
        textureLoader.load(imageUrl, (texture) => {
          texture.minFilter = THREE.LinearFilter;
          texture.magFilter = THREE.LinearFilter;
          resolve(texture);
        });
      });
    };

    const createCube = async () => {
      const tsTexture = await loadTexture(TsIcon.src);
      const javaTexture = await loadTexture(JavaIcon.src);
      const jsTexture = await loadTexture(JsIcon.src);
      const pyTexture = await loadTexture(PyIcon.src);
      const goTexture = await loadTexture(goIcon.src);
      const materials = [
        new THREE.MeshStandardMaterial({ map: tsTexture as THREE.Texture, metalness: 0.3, roughness: 0.4 }),   
        new THREE.MeshStandardMaterial({ map: javaTexture as THREE.Texture, metalness: 0.3, roughness: 0.4 }), 
        new THREE.MeshStandardMaterial({ map: jsTexture as THREE.Texture, metalness: 0.3, roughness: 0.4 }),   
        new THREE.MeshStandardMaterial({ map: pyTexture as THREE.Texture, metalness: 0.3, roughness: 0.4 }), 
        new THREE.MeshStandardMaterial({ map: goTexture as THREE.Texture, metalness: 0.3, roughness: 0.4 }),  
        new THREE.MeshStandardMaterial({ map: javaTexture as THREE.Texture, metalness: 0.3, roughness: 0.4 }), 
      ];

      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const cube = new THREE.Mesh(geometry, materials);
      
      cube.rotation.x = Math.PI / 4;
      cube.rotation.y = Math.PI / 4;
      
      scene.add(cube);
      setIsLoading(false);
      return cube;
    };

    let cube: THREE.Mesh;
    createCube().then(createdCube => {
      cube = createdCube;
      animate();
    });

    const animate = () => {
      requestAnimationFrame(animate);
      if (cube) {
        cube.rotation.y += 0.005;
        cube.rotation.x += 0.005;
      }
      controls.update();
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!mountRef.current) return;

      const width = mountRef.current.clientWidth;
      const height = mountRef.current.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);
    const resizeObserver = new ResizeObserver(handleResize);
    if (mountRef.current) {
      resizeObserver.observe(mountRef.current);
    }
    return () => {
      window.removeEventListener('resize', handleResize);
      resizeObserver.disconnect();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div className="relative w-full h-full"> 
    {isLoading && (
      <div className="absolute inset-0 flex items-center justify-center bg-slate-900">
        <div className="w-12 h-12 border-4 border-blue-400 border-t-transparent rounded-full animate-spin" />
      </div>
    )}
    <div 
      ref={mountRef} 
      className="w-full h-full rounded-lg overflow-hidden"
      style={{ background: '##e5e7eb' }}
    />
  </div>
  );
}