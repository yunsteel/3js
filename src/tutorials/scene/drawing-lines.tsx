import { FC, useEffect, useMemo, useRef } from 'react';
import { BufferGeometry, Line, LineBasicMaterial, PerspectiveCamera, Scene, Vector3, WebGLRenderer } from 'three';

// https://threejs.org/docs/#manual/ko/introduction/Drawing-lines
export const DrawingLines: FC = () => {
  const renderer = useRef(new WebGLRenderer());
  const camera = useRef(new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 500));
  const scene = useRef(new Scene());

  const material = useRef(new LineBasicMaterial({ color: 0x0000ff }));

  const points = useMemo(() => {
    const point1 = new Vector3(-10, 0, 0);
    const point2 = new Vector3(0, 10, 0);
    const point3 = new Vector3(10, 0, 0);

    return [point1, point2, point3];
  }, []);

  const geometry = useRef(new BufferGeometry());

  const line = useRef(new Line(geometry.current, material.current));

  useEffect(() => {
    renderer.current.setSize(innerWidth / 2, innerHeight / 2);
    document.body.appendChild(renderer.current.domElement);

    camera.current.position.set(0, 0, 100);
    camera.current.lookAt(0, 0, 0);

    geometry.current.setFromPoints(points);

    scene.current.add(line.current);
    renderer.current.render(scene.current, camera.current);

    return () => {
      document.body.removeChild(renderer.current.domElement);
    };
  }, [points]);

  return null;
};
