import assert from 'node:assert';
import { describe, mock } from 'node:test';

import { Animal, Cat, Cow, Dog } from '../src/animal-prototype.js';
import { optional } from '../utils/optional.js';

function isClass(fn) {
  try {
    fn();
    return false;
  } catch (error) {
    return (
      error.message ===
      `Class constructor ${fn.name} cannot be invoked without 'new'`
    );
  }
}

describe('Animal prototype', () => {
  optional(
    '"Animal" must be implemented as a constructor function, not a class',
    () => {
      assert.strictEqual(isClass(Animal), false);
    }
  );

  optional(
    '"Dog" must be implemented as a constructor function, not a class',
    () => {
      assert.strictEqual(isClass(Dog), false);
    }
  );

  optional(
    '"Cat" must be implemented as a constructor function, not a class',
    () => {
      assert.strictEqual(isClass(Cat), false);
    }
  );

  optional(
    '"Cow" must be implemented as a constructor function, not a class',
    () => {
      assert.strictEqual(isClass(Cow), false);
    }
  );

  optional(
    '"Dog" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const dog1 = new Dog('Rex');
      const dog2 = new Dog('Buddy');

      assert.strictEqual(Object.hasOwn(dog1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(dog2, 'makeSound'), false);
      assert.strictEqual(Object.is(dog1.makeSound, dog2.makeSound), true);
    }
  );

  optional(
    '"Cat" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const cat1 = new Cat('Whiskers');
      const cat2 = new Cat('Tom');

      assert.strictEqual(Object.hasOwn(cat1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(cat2, 'makeSound'), false);
      assert.strictEqual(Object.is(cat1.makeSound, cat2.makeSound), true);
    }
  );

  optional(
    '"Cow" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const cow1 = new Cow('Bessie');
      const cow2 = new Cow('Daisy');

      assert.strictEqual(Object.hasOwn(cow1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(cow2, 'makeSound'), false);
      assert.strictEqual(Object.is(cow1.makeSound, cow2.makeSound), true);
    }
  );

  optional(
    '"Animal" must have "makeSound" defined on prototype, not directly on object',
    () => {
      const animal1 = new Animal('Generic');
      const animal2 = new Animal('Animal');

      assert.strictEqual(Object.hasOwn(animal1, 'makeSound'), false);
      assert.strictEqual(Object.hasOwn(animal2, 'makeSound'), false);
      assert.strictEqual(Object.is(animal1.makeSound, animal2.makeSound), true);
    }
  );

  optional('Instances must return correct names and sounds', () => {
    const dog = new Dog('Rex');
    const cat = new Cat('Whiskers');
    const cow = new Cow('Bessie');
    const animal = new Animal('Generic');

    assert.strictEqual(dog.name, 'Rex');
    assert.strictEqual(dog.makeSound(), 'Woof');

    assert.strictEqual(cat.name, 'Whiskers');
    assert.strictEqual(cat.makeSound(), 'Meow');

    assert.strictEqual(cow.name, 'Bessie');
    assert.strictEqual(cow.makeSound(), 'Moo');

    assert.strictEqual(animal.name, 'Generic');
    assert.strictEqual(animal.makeSound(), 'Unknown sound');
  });

  optional('Instances must have correct constructor', () => {
    const dog = new Dog('Rex');
    const cat = new Cat('Whiskers');
    const cow = new Cow('Bessie');
    const animal = new Animal('Generic');

    assert.strictEqual(dog.constructor, Dog);
    assert.strictEqual(cat.constructor, Cat);
    assert.strictEqual(cow.constructor, Cow);
    assert.strictEqual(animal.constructor, Animal);
  });

  optional('"Dog" must correctly inherit from Animal', () => {
    const dog = new Dog('Rex');

    const mockAnimal = mock.fn(Animal);
    assert.strictEqual(mockAnimal.mock.callCount(), 1);

    assert.ok(dog instanceof Dog);
    assert.ok(dog instanceof Animal);
    assert.strictEqual(dog.isAnimal, true);
  });

  optional('"Cat" must correctly inherit from Animal', () => {
    const cat = new Cat('Whiskers');

    const mockAnimal = mock.fn(Animal);
    assert.strictEqual(mockAnimal.mock.callCount(), 1);

    assert.strictEqual(cat.isAnimal, true);
    assert.ok(cat instanceof Cat);
    assert.ok(cat instanceof Animal);
  });

  optional('"Cow" must correctly inherit from Animal', () => {
    const cow = new Cow('Bessie');

    const mockAnimal = mock.fn(Animal);
    assert.strictEqual(mockAnimal.mock.callCount(), 1);

    assert.strictEqual(cow.isAnimal, true);
    assert.ok(cow instanceof Cow);
    assert.ok(cow instanceof Animal);
  });

  optional('Prototypes are distinct objects', () => {
    assert.notStrictEqual(Animal.prototype, Cat.prototype);
    assert.notStrictEqual(Animal.prototype, Dog.prototype);
    assert.notStrictEqual(Animal.prototype, Cat.prototype);
    assert.notStrictEqual(Animal.prototype, Cow.prototype);

    assert.notStrictEqual(Dog.prototype, Cat.prototype);
    assert.notStrictEqual(Cat.prototype, Cow.prototype);
    assert.notStrictEqual(Dog.prototype, Cow.prototype);
  });
});
