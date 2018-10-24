import * as THREE from 'three';
import GameScene from './classes/GameScene';
import GameCamera from './classes/GameCamera';
import './index.css'
import { Vector3 } from 'three';
import GameWorld from './classes/GameWorld';
import GameObject from './classes/GameObject';
import Rendering from './classes/components/Rendering';
import InputController from './classes/InputController';

const gameScene = new GameScene()
GameCamera.position.y = 4
GameCamera.position.z = 7
GameCamera.position.x = 2.5
GameCamera.camera.lookAt(new Vector3(2.5, 0, 2.5))

const gameWorld = new GameWorld()
gameWorld.setup()

let lastTick: number = Date.now()

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function update() {
	const now = Date.now()
	const d = now - lastTick
	lastTick = now

	// Update InputController
	InputController.update()

	// Update meshes
	GameObject.getComponentsOfType(Rendering).forEach(c => c.update(d))


	// Render
	renderer.render(gameScene.scene, GameCamera.camera);
	requestAnimationFrame(update)
}

update()