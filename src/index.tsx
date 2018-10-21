import * as THREE from 'three';
import GameScene from './classes/GameScene';
import GameCamera from './classes/GameCamera';
import './index.css'
import { Vector3 } from 'three';
import GameWorld from './classes/GameWorld';

const gameScene = new GameScene()
const gameCamera = new GameCamera()
const gameWorld = new GameWorld()
gameWorld
gameCamera.transform.position.y = 4

let lastTick: number = Date.now()

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function update() {
	const now = Date.now()
	const d = now - lastTick
	d
	lastTick = now
	renderer.render(gameScene.scene, gameCamera.camera);
	gameCamera.camera.lookAt(new Vector3(2.5, 0, 2.5))
	requestAnimationFrame(update)
}

update()