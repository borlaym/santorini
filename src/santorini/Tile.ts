import GameObject from '../classes/GameObject';
import Rendering from '../classes/components/Rendering';
import { PlaneGeometry, MeshLambertMaterial, Mesh } from 'three';
import Collision from '../classes/components/Collision';

const tileGeometry = new PlaneGeometry(1, 1);
const tileMaterial = new MeshLambertMaterial({ color: 0x00ff00 });

export class Tile extends GameObject {
	constructor(
		public readonly row: number,
		public readonly col: number
	) {
		super()
		this.addComponent(new Rendering(new Mesh(tileGeometry, tileMaterial)))
		this.addComponent(new Collision(new Mesh(tileGeometry, tileMaterial)))
		this.transform.position.x = row
		this.transform.position.z = col
	}
}