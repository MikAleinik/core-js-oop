import { throwNotImplementedError } from '../utils/throw-not-implemented-error.js';

/**
 * @abstract
 * Represents any animal.
 * Do not modify this class.
 */
export class AbstractAnimal {
  /**
   * @public
   * @abstract
   * @throws {Error}
   */
  makeSound() {
    throw new Error('Abstract method "makeSound" not implemented');
  }
}

export class Dog extends AbstractAnimal {
  /**
   * @public
   * @returns {string}
   *
   * @example
   * const dog = new Dog()
   * dog.makeSound() => 'Woof'
   */
  makeSound() {
    throwNotImplementedError();
  }
}

export class Cat extends AbstractAnimal {
  /**
   * @public
   * @returns {string}
   *
   * @example
   * const cat = new Cat()
   * cat.makeSound() => 'Meow'
   */
  makeSound() {
    throwNotImplementedError();
  }
}

export class Sheep extends AbstractAnimal {
  /**
   * @public
   * @returns {string}
   *
   * @example
   * const sheep = new Sheep()
   * sheep.makeSound() => 'Baa'
   */
  makeSound() {
    throwNotImplementedError();
  }
}

export class Cow extends AbstractAnimal {
  /**
   * @public
   * @returns {string}
   *
   * @example
   * const cow = new Cow()
   * cow.makeSound() => 'Moo'
   */
  makeSound() {
    throwNotImplementedError();
  }
}
