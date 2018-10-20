import * as THREE from 'three';
import GameScene from './classes/GameScene';
import GameCamera from './classes/GameCamera';
import { Camera } from 'three';
import './index.css'

const gameScene = new GameScene()
const gameCamera = new GameCamera()

let lastTick: number = Date.now()

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function update() {
	const now = Date.now()
	const d = now - lastTick
	console.log(d)
	lastTick = now
	renderer.render(gameScene.scene, gameCamera.camera as Camera);
	requestAnimationFrame(update)
}

update()