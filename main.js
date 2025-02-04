import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
camera.position.z = 4.5;
camera.position.y = 1.5;

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

//Add Ground
const ground = new THREE.Mesh(
  new THREE.BoxGeometry(30, 1, 30),
  new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
ground.position.y = -1;
scene.add(ground);

//Add Player
const player = new THREE.Mesh(
  new THREE.BoxGeometry(0.5, 0.5, 0.5),
  new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
scene.add(player);

const gridHelper = new THREE.GridHelper(30, 30);
scene.add(gridHelper);
const controls = new OrbitControls(camera, renderer.domElement);
function animate() {
  controls.update();
  renderer.render(scene, camera);
}
window.addEventListener("resize", () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
});
window.addEventListener("keydown", (e) => {
  if (e.key === "w") {
    player.position.z -= 0.1;
  }
  if (e.key === "s") {
    player.position.z += 0.1;
  }
  if (e.key === "a") {
    player.position.x -= 0.1;
  }
  if (e.key === "d") {
    player.position.x += 0.1;
  }
});
