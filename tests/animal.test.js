import assert from 'node:assert';
import { describe } from 'node:test';

import { Animal, Cat, Cow, Dog } from '../src/animal.js';
import { optional } from '../utils/optional.js';
import { assertNoComments } from '../utils/assert-no-comments.js';

describe('Animal', () => {
  optional('Dog should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Dog() instanceof Animal);
  });

  optional('Cat should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Cat() instanceof Animal);
  });

  optional('Cow should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
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

  optional('should not contain commentaries', () => {
    [new Cat().makeSound, new Dog().makeSound, new Cow().makeSound].forEach(
      (fn) => assertNoComments(fn)
    );
  });
});
