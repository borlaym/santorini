import { Scene } from 'three';
import Events from './Events';
import ComponentAddedEvent from './events/ComponentAddedEvent';
import Component from './Component';
import Rendering from './Rendering';
import Collision from './Collision';

export default class GameScene {
	public readonly scene = new Scene()
	constructor() {
		Events.addListener((event) => {
			switch (event.constructor) {
				case ComponentAddedEvent: {
					const component: Component = (event as ComponentAddedEvent).component
					switch (component.constructor) {
						case Rendering:
							this.scene.add((component as Rendering).mesh)
						case Collision:
							this.scene.add((component as Collision).collider)
					}
				}
			}
		})
	}
}