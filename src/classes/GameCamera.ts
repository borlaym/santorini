import { PerspectiveCamera } from "three";
import GameObject from './GameObject';
import Rendering from './Rendering';

export default class GameCamera extends GameObject {
	constructor() {
		super()
		this.addComponent(new Rendering(new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)))
	}
	public get camera() {
		return this.getComponent(Rendering).mesh
	}
}