import GameObject from './GameObject';

export default abstract class Component {
	public gameObject: GameObject
	public abstract update(dt: number): void
}