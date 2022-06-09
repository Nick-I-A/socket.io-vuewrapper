import Logger from './logger';

export default class EventEmitter {
    constructor() {
        this.listeners = new Map();
    }

    /**
     * Register new event listener with vuejs component instance
     * @param event
     * @param callback
     * @param component
     */
    addListener(event, callback, component) {
        if (typeof callback !== 'function') {
            throw new Error('callback must be a function');
        }

        if (!this.listeners.has(event)) {
            this.listeners.set(event, []);
        }
        this.listeners.get(event).push({ callback, component });

        Logger.info(`#${event} subscribe, component: ${JSON.stringify(component.$options.__file)}`);
    }

    /**
     * Remove a listener
     * @param event
     * @param component
     */
    removeListener(event, component) {
        if (!this.listeners.has(event)) {
            return;
        }

        const listeners = this.listeners.get(event).filter(listener => (
            listener.component !== component
        ));

        if (listeners.length > 0) {
            this.listeners.set(event, listeners);
        } else {
            this.listeners.delete(event);
        }

        Logger.info(`#${event} unsubscribe, component: ${component.$options.name}`);
    }

    /**
     * Broadcast incoming event to components
     * @param event
     * @param args
     */
    emit(event, args) {
        if (this.listeners.has(event)) {
            Logger.info(`Broadcasting: #${event}, Data:`, args);

            this.listeners.get(event).forEach((listener) => {
                listener.callback.call(listener.component, args);
            });
        }
    }
};