import * as uuid from 'uuid'
import Component from './Component';

export default class GameObject {
	public static getById<T extends GameObject>(uuid: string): GameObject | null {
		return GameObject.instances[uuid] || null
	}

	public static getObjectsOfType<T extends GameObject>(objectClass: new () => T): T[] {
		const retVal: T[] = []
		Object.keys(GameObject.instances).forEach((uuid: string) => {
			const instance = GameObject.instances[uuid]
			if (instance instanceof objectClass) {
				retVal.push(instance)
			}
		})
		return retVal
	}

	public static getObjectsWithComponent<T extends Component>(componentClass: new () => T): GameObject[] {
		const retVal: GameObject[] = []
		Object.keys(GameObject.instances).forEach((uuid: string) => {
			const instance = GameObject.instances[uuid]
			if (instance.components.find(c => c instanceof componentClass)) {
				retVal.push(instance)
			}
		})
		return retVal
	}

	public static getComponentsOfType<T extends Component>(componentClass: new () => T): T[] {
		const retVal: T[] = []
		Object.keys(GameObject.instances).forEach((uuid: string) => {
			const gameObject = GameObject.instances[uuid]
			gameObject.components.forEach(component => {
				if (component instanceof componentClass) {
					retVal.push(component)
				}
			})
		})
		return retVal
	}
	
	private static instances: { [uuid: string]: GameObject } = {}


	public readonly uuid: string
	private readonly components: Component[] = []

	constructor() {
		this.uuid = uuid.v4()
		GameObject.instances[this.uuid] = this
	}

	public getComponent<T extends Component>(componentClass: new() => T): T {
		const component = this.components.find((component: Component) => component instanceof componentClass)
		if (!component || !(component instanceof componentClass)) {
			throw new Error('Cant find component')
		}
		return component
	}

	public addComponent(component: Component): void {
		this.components.push(component)
		component.gameObject = this
	}

	

}