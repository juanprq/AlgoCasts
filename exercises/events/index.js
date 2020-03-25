// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor () {
    this.callbacks = {};
  }
  // Register an event handler
  on(eventName, callback) {
    this.callbacks[eventName] = [...(this.callbacks[eventName] || []), callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    const callbacks = this.callbacks[eventName] || [];

    callbacks.forEach((fn) => fn());
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    this.callbacks[eventName] = null;
  }
}

module.exports = Events;
