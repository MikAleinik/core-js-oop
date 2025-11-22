import assert from 'node:assert';
import { describe } from 'node:test';

import { Animal, Cat, Cow, Dog } from '../src/animal.js';
import { optional } from '../utils/optional.js';

describe('Animal', () => {
  optional('should throw error when "makeSound" is called on Animal class', () => {
    const animal = new Animal();

    assert.throws(() => animal.makeSound(), /Abstract method "makeSound" not implemented/);
  });

  optional('Dog, Cat and Cow classes should extend Animal class', () => {
    assert.ok(new Dog() instanceof Animal);
    assert.ok(new Cat() instanceof Animal);
    assert.ok(new Cow() instanceof Animal);
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
});
