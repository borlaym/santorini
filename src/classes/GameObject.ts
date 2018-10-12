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
	}

	

}