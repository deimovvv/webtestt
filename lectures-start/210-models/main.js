import {GLTFLoader} from '../../libs/three.js-r132/examples/jsm/loaders/GLTFLoader'
/* import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; */
/* import { GLTFLoader } from 'three';  */

const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {
    const mindarThree = new window.MINDAR.IMAGE.MindARThree({
      container: document.body,
      imageTargetSrc: '../../assets/targets/musicband.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    const light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1)
    scene.add(light)

    const anchor = mindarThree.addAnchor(0);

    const loader = new GLTFLoader()
    loader.load("../../assets/models/musicband-raccoon/scene.gltf", (gltf) => {
       // gltf.scene = THREE.Group
       anchor.group.add(gltf.scene)
    })

    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
