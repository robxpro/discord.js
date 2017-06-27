/**
 * Represents a data model that is identifiable by a Snowflake (i.e. Discord API data models)
 */
class Base {
  constructor(client, data) {
    /**
     * The client that instantiated this
     * @name Base#client
     * @type {Client}
     * @readonly
     */
    Object.defineProperty(this, 'client', {
      value: client,
      enumerable: false,
      writable: false,
    });
  }

  _clone() {
    return Object.assign(Object.create(this), this);
  }

  _patch(data) { return data; }

  _update(data) {
    const clone = this._clone();
    this._patch(data);
    return clone;
  }
}

module.exports = Base;