import { Camera, PerspectiveCamera } from 'three';

export default class GameCamera {
	public readonly camera: Camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 100)
}