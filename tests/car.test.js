import assert from 'node:assert';
import { describe } from 'node:test';

import { Car, Engine } from '../src/car.js';
import { assertNoComments } from '../utils/assert-no-comments.js';
import { optional } from '../utils/optional.js';

describe('Car and Engine', () => {
  describe('Engine', () => {
    optional('should return power via getter', () => {
      const engine = new Engine(100);

      assert.strictEqual(engine.power, 100);

      assertNoComments(Engine);
    });

    optional('should update power via setter', () => {
      const engine = new Engine(100);
      engine.power = 200;

      assert.strictEqual(engine.power, 200);

      assertNoComments(Engine);
    });
  });

  describe('Car', () => {
    optional('"getEnginePower" should return engine power', () => {
      const engine = new Engine(100);
      const car = new Car(engine);

      assert.strictEqual(car.getEnginePower(), 100);

      [Car, Engine].forEach((fn) => assertNoComments(fn));
    });

    optional('"getEnginePower" should reflect updated engine power', () => {
      const engine = new Engine(120);
      const car = new Car(engine);
      engine.power = 150;

      assert.strictEqual(car.getEnginePower(), 150);

      [Car, Engine].forEach((fn) => assertNoComments(fn));
    });

    optional('"changeEngine" should correctly change the engine', () => {
      const engine1 = new Engine(80);
      const engine2 = new Engine(200);
      const car = new Car(engine1);

      assert.strictEqual(car.getEnginePower(), 80);

      car.changeEngine(engine2);

      assert.strictEqual(car.getEnginePower(), 200);

      [Car, Engine].forEach((fn) => assertNoComments(fn));
    });

    optional('should reflect new engine updates after change', () => {
      const engine1 = new Engine(60);
      const engine2 = new Engine(90);
      const car = new Car(engine1);
      car.changeEngine(engine2);

      engine2.power = 120;

      assert.strictEqual(car.getEnginePower(), 120);

      [Car, Engine].forEach((fn) => assertNoComments(fn));
    });
  });
});
