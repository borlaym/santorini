import GameObject from '../classes/GameObject';
import Rendering from '../classes/components/Rendering';
import { PlaneGeometry, Mesh, MeshBasicMaterial } from 'three';
import Collision from '../classes/components/Collision';
import * as THREE from 'three';
import InputController from 'src/classes/InputController';
import Transform from 'src/classes/components/Transform';

const tileGeometry = new PlaneGeometry(1, 1);
const tileMaterial = new MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
const highlightedMaterial = new MeshBasicMaterial({ color: 0xffffff, side: THREE.DoubleSide });

export class Tile extends GameObject {
	constructor(
		public readonly row: number,
		public readonly col: number
	) {
		super()
		const mesh = new Mesh(tileGeometry, tileMaterial)
		this.addComponent(new Rendering(mesh))
		this.addComponent(new Collision(mesh))
		this.transform.position.x = row
		this.transform.position.z = col
		this.transform.rotation.x = -Math.PI / 2
	}

	public update() {
		const mesh = this.getComponent(Rendering).mesh as Mesh
		if (InputController.mousePointingAt === this) {
			mesh.material = highlightedMaterial
			if (InputController.click) {
				console.log(this.getComponent(Transform).position)
			}
		} else {
			mesh.material = tileMaterial
		}
	}
}