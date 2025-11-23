import assert from 'node:assert';
import { describe } from 'node:test';

import { Animal, Cat, Cow, Dog } from '../src/animal.js';
import { assertNoComments } from '../utils/assert-no-comments.js';
import { optional } from '../utils/optional.js';

describe('Animal', () => {
  optional('Dog should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Dog() instanceof Animal);

    assertNoComments(Dog);
  });

  optional('Cat should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Cat() instanceof Animal);

    assertNoComments(Cat);
  });

  optional('Cow should extend Animal class', () => {
    assert.throws(
      () => new Animal(),
      /An object of an abstract "Animal" class cannot be created/
    );
    assert.ok(new Cow() instanceof Animal);

    assertNoComments(Cow);
  });

  optional('Dog should bark', () => {
    const dog = new Dog();

    assert.strictEqual(dog.makeSound(), 'Woof');

    assertNoComments(Dog);
  });

  optional('Cat should meow', () => {
    const cat = new Cat();

    assert.strictEqual(cat.makeSound(), 'Meow');

    assertNoComments(Cat);
  });

  optional('Cow should moo', () => {
    const cow = new Cow();

    assert.strictEqual(cow.makeSound(), 'Moo');

    assertNoComments(Cow);
  });
});
