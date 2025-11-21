import assert from 'node:assert';
import { describe } from 'node:test';

import { AbstractAnimal, Cat, Cow, Dog, Sheep } from '../src/animal.js';
import { optional } from '../utils/optional.js';

describe('Animal', () => {
  optional('should throw error if makeSound() is called on AbstractAnimal class', () => {
    const animal = new AbstractAnimal();

    assert.throws(() => animal.makeSound(), /Abstract method "makeSound" not implemented/);
  });

  optional('Dog should bark', () => {
    const dog = new Dog();

    assert.strictEqual(dog.makeSound(), 'Woof');
  });

  optional('Cat should meow', () => {
    const cat = new Cat();

    assert.strictEqual(cat.makeSound(), 'Meow');
  });

  optional('Cow should moo', () => {
    const cow = new Cow();

    assert.strictEqual(cow.makeSound(), 'Moo');
  });

  optional('Sheep should baa', () => {
    const sheep = new Sheep();

    assert.strictEqual(sheep.makeSound(), 'Baa');
  });
});
