import { FC, useEffect, useRef } from 'react';
import { BoxGeometry, Mesh, MeshBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer } from 'three';

export const App: FC = () => {
  const scene = useRef(new Scene());

  // 75: field of view. 카메라 각도
  // aspect ratio.
  // 0.1, 1000: near와 far의 절단면. 각각 minimum-maximum 거리감이라고 보면 됨. 그 바깥 범위에서는 렌더링 되지 않음.
  const camera = useRef(new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000));

  const renderer = useRef(new WebGLRenderer());

  const geometry = useRef(new BoxGeometry(1, 1, 1)); // 꼭짓점과 면
  const material = useRef(new MeshBasicMaterial({ color: 0x00ff00 }));
  const cube = useRef(new Mesh(geometry.current, material.current)); // 재질 적용, 자유롭게 움직일 수 있다.

  useEffect(() => {
    renderer.current.setSize(window.innerWidth / 2, window.innerHeight / 2);
    // 세 번째 인자에 false를 넣으면 더 낮은 해상도로 렌더링할 수 있다.
    document.body.appendChild(renderer.current.domElement);

    scene.current.add(cube.current);

    camera.current.position.z = 5;
    // add시 (0,0,0) 포지션이 기본. 그래서 카메라 위치를 옮김

    let handler: number | null = null;

    const animate = () => {
      cube.current.rotation.x += 0.01;
      cube.current.rotation.y += 0.01; // 프레임마다 계속 실행

      renderer.current.render(scene.current, camera.current);
      handler = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (handler !== null) {
        cancelAnimationFrame(handler);
      }
    };
  }, []);

  return null;
};
