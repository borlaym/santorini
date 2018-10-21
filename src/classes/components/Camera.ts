import Component from '../Component';
import { Camera, PerspectiveCamera } from 'three';
import Transform from './Transform';

export default class Rendering extends Component {
	public readonly camera: Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
	public update(dt: number): void {
		const { position, rotation } = this.gameObject.getComponent(Transform)
		this.camera.position.set(position.x, position.y, position.z)
		this.camera.rotation.set(rotation.x, rotation.y, rotation.z)
	}

	protected handleEvent(event: GamepadEvent): void {
		return
	}
}