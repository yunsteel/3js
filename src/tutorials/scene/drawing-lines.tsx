import { FC, useEffect, useRef } from 'react';
import { LineBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

// https://threejs.org/docs/#manual/ko/introduction/Drawing-lines
export const DrawingLines: FC = () => {
  const renderer = useRef(new WebGLRenderer());
  const camera = useRef(new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500));
  const scene = useRef(new Scene());

  const material = useRef(new LineBasicMaterial({ color: 0x0000ff }));

  useEffect(() => {
    renderer.current.setSize(innerWidth / 2, innerHeight / 2);
    document.body.appendChild(renderer.current.domElement);

    camera.current.position.set(0, 0, 100);
    camera.current.lookAt(0, 0, 0);
  }, []);

  return null;
};
