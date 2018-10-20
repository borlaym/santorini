import GameEvent from './GameEvent';

type EventCallback = (event: GameEvent) => void

export default class Events {
	private static callbacks: EventCallback[] = []
	static addListener(onEvent: EventCallback) {
		this.callbacks.push(onEvent)
	}
	static emit(event: GameEvent) {
		this.callbacks.forEach(callback => callback(event))
	}
}