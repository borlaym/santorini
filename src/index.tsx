import * as THREE from 'three';
import Events from './classes/Events';
import Component from './classes/Component';
import Rendering from './classes/Rendering';
import Collision from './classes/Collision';
import ComponentAddedEvent from './classes/events/ComponentAddedEvent';

const scene = new THREE.Scene();
Events.addListener((event) => {
	switch (event.constructor) {
		case ComponentAddedEvent: {
			const component: Component = (event as ComponentAddedEvent).component
			switch (component.constructor) {
				case Rendering:
					scene.add((component as Rendering).mesh)
				case Collision:
					scene.add((component as Collision).collider)
			}
		}
	}
})

let lastTick: number = Date.now()

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

function update() {
	const now = Date.now()
	const d = now - lastTick
	console.log(d)
	lastTick = now
}

update()