import { uniq } from 'lodash';

class InputController {
	public keysDown: string[] = []
	public mousePos: { x: number, y: number } = { x: 0, y: 0 }
	public click: boolean = false
	constructor() {
		document.addEventListener('keydown', (event) => {
			this.keysDown = uniq(this.keysDown.concat(event.key));
		});

		document.addEventListener('keyup', (event) => {
			this.keysDown = this.keysDown.filter(key => key !== event.key);
		});

		document.addEventListener('click', () => {
			this.click = true
		});

		document.addEventListener("mousemove", (event) => {
			this.mousePos.x = (event.clientX / window.innerWidth) * 2 - 1
			this.mousePos.y = - (event.clientY / window.innerHeight) * 2 + 1;
		});
	}

	public update() {
		this.click = false
	}
}

export default new InputController()