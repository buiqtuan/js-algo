class Events {
	constructor() {
		this.events = {};
	}

	on(eventName, cb) {
		if (!eventName) {
			return;
		}

		if (!this.events[eventName]) {
			this.events[eventName] = [cb];
		} else {
			this.events[eventName].push(cb);
		}
	}

	trigger(eventName) {
		if (!eventName) {
			return;
		}

		if (this.events[eventName]) {
			for (let cb of this.events[eventName]) {
				cb();
			}
		}
	}

	off(eventName) {
		if (!eventName) {
			return;
		}

		if (this.events[eventName]) {
			this.events[eventName] = null;
		}
	}
}