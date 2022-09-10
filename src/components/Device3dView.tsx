import { View } from 'react-native';
import { Renderer, THREE } from 'expo-three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import SplineLoader from '@splinetool/loader';
import { ExpoWebGLRenderingContext, GLView } from 'expo-gl';
import { Asset } from 'expo-asset';

export function Device3dView() {
  return (
    <GLView
      style={{ flex: 1, height: 300 }}
      onContextCreate={async (gl: ExpoWebGLRenderingContext) => {
        const renderer = new Renderer({ gl }) as any;
        renderer.setSize(gl.drawingBufferWidth, gl.drawingBufferHeight);

        const asset = Asset.fromModule(require('../assets/purple_icons.gltf'));

        await asset.downloadAsync();

        const gltfLoader = new GLTFLoader();

        gltfLoader.load(asset.localUri, (gltf) => {
          const scene = gltf.scene;
          const camera = new THREE.PerspectiveCamera(
            75,
            gl.drawingBufferWidth / gl.drawingBufferHeight,
            0.1,
            1000
          );
          camera.position.z = 5;

          const animate = () => {
            requestAnimationFrame(animate);
            renderer.render(scene, camera);
            gl.endFrameEXP();
          };
          animate();
        });
      }}
    />
  );
}
