import * as THREE from 'three';
import GameObject from './classes/GameObject';
import Rendering from './classes/Rendering';
import Collision from './classes/Collision';

const scene = new THREE.Scene();

let lastTick: number = Date.now()

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function update() {
	GameObject.getComponentsOfType(Rendering).forEach((component: Rendering) => scene.add(component.mesh))
	GameObject.getComponentsOfType(Collision).forEach((component: Collision) => scene.add(component.collider))
	const now = Date.now()
	const d = now - lastTick
	lastTick = now
}

update()