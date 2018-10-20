import GameObject from './GameObject';
import Events from './Events';
import ComponentAddedEvent from './events/ComponentAddedEvent';

export default abstract class Component {
	public gameObject: GameObject
	constructor() {
		Events.addListener(this.handleEvent.bind(this))
		Events.emit(new ComponentAddedEvent(this))
	}
	public abstract update(dt: number): void
	protected abstract handleEvent(event: GamepadEvent): void
}