import { throwNotImplementedError } from '../utils/throw-not-implemented-error.js';

export class Person {
  /**
   * @public
   * @static
   * @type {number}
   */
  static count = 0;

  /**
   * @public
   * @static
   * @type {number}
   */
  static totalWeight = 0;

  /**
   * @public
   * @static
   * @type {number}
   */
  static totalHeight = 0;

  /**
   * @public
   * @static
   * @returns {number}
   */
  static averageWeight() {
    throwNotImplementedError();
  }

  /**
   * @public
   * @static
   * @returns {number}
   */
  static averageHeight() {
    throwNotImplementedError();
  }

  /**
   * @param {number} weight
   * @param {number} height
   */
  constructor(/* weight, height */) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   */
  get weight() {
    throwNotImplementedError();
  }

  /**
   * @public
   * @param {number} weight
   * @returns {number}
   */
  set weight(weight) {
    throwNotImplementedError();
  }

  /**
   * @public
   * @returns {number}
   */
  get height() {
    throwNotImplementedError();
  }

  /**
   * @public
   * @param {number} height
   * @returns {number}
   */
  set height(height) {
    throwNotImplementedError();
  }
}
