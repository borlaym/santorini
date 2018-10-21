import GameObject from './GameObject';
import CameraComponent from './components/Camera';
import { Camera } from 'three';

export default class GameCamera extends GameObject {
	constructor() {
		super()
		this.addComponent(new CameraComponent())
	}
	public get camera(): Camera {
		return this.getComponent(CameraComponent).camera
	}
}