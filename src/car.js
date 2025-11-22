import { throwNotImplementedError } from '../utils/throw-not-implemented-error.js';

export class Engine {
  /**
   * @param {number} power
   */
  constructor(power) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   */
  get power() {
    throwNotImplementedError();
  }

  /**
   * @public
   * @param {number} power
   * @returns {number}
   */
  set power(power) {
    throwNotImplementedError();
  }
}

export class Car {
  /**
   * @param {Engine} engine
   */
  constructor(engine) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   */
  getEnginePower() {
    throwNotImplementedError();
  }

  /**
   * @public
   * @param {Engine} engine
   * @returns {void}
   */
  changeEngine(engine) {
    throwNotImplementedError();
  }
}
