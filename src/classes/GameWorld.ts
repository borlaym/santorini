import GameObject from './GameObject';

export default class GameWorld {
	private readonly gameObjects: GameObject[] = []
	public addObject(gameObject: GameObject) {
		this.gameObjects.push(gameObject)
	}
}