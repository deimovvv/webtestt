const THREE = window.MINDAR.IMAGE.THREE;
/* import * as THREE from 'three' */
import {mockWithVideo, mockWithImage} from '../../libs/camera-mock.js'

import { MindARThree } from 'mindar-image-three'

document.addEventListener('DOMContentLoaded', () => {
  const start = async() => {

    /* mockWithVideo('../../assets/mocks-videos/course-banner1.mind.mp4') */
    mockWithImage('../../assets/mocks-videos/course-banner1.mind.png')


    // initialize MindAR 
    const mindarThree = new MindARThree({
      container: document.body,
      imageTargetSrc: '../../assets/targets/course-banner.mind',
    });
    const {renderer, scene, camera} = mindarThree;

    // create AR object
    const geometry = new THREE.PlaneGeometry(1, 1);
    const material = new THREE.MeshBasicMaterial({color: 0x00ffff, transparent: true, opacity: 0.5});
    const plane = new THREE.Mesh(geometry, material);

    // create anchor
    const anchor = mindarThree.addAnchor(0);
    anchor.group.add(plane);

    // start AR
    await mindarThree.start();
    renderer.setAnimationLoop(() => {
      renderer.render(scene, camera);
    });
  }
  start();
});
