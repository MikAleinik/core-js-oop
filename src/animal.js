import { throwNotImplementedError } from '../utils/throw-not-implemented-error.js';

/**
 * @abstract
 *
 * Represents any animal.
 * Do not modify this class.
 */
export class Animal {
  /**
   * Should return the sound of the specific animal.
   * Must be implemented in subclasses.
   *
   * @public
   * @abstract
   * @returns {string}
   * @throws {Error}
   */
  makeSound() {
    throw new Error('Abstract method "makeSound" not implemented');
  }
}

/**
 * Must correctly extend Animal.
 * Sound: "Woof"
 */
export class Dog {
  // Remove this constructor once the class is implemented
  constructor() {
    throwNotImplementedError();
  }
}

/**
 * Must correctly extend Animal.
 * Sound: "Meow"
 */
export class Cat {
  // Remove this constructor once the class is implemented
  constructor() {
    throwNotImplementedError();
  }
}

/**
 * Must correctly extend Animal.
 * Sound: "Moo"
 */
export class Cow {
  // Remove this constructor once the class is implemented
  constructor() {
    throwNotImplementedError();
  }
}
