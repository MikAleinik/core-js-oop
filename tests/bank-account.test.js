import assert from 'node:assert';
import { describe } from 'node:test';

import { BankAccount } from '../src/bank-account.js';
import { assertNoComments } from '../utils/assert-no-comments.js';
import { optional } from '../utils/optional.js';

describe('BankAccount', () => {
  optional('should initialize with starting balance', () => {
    const account = new BankAccount(100);

    assert.strictEqual(account.getBalance(), 100);

    assertNoComments(BankAccount);
  });

  optional('should deposit money', () => {
    const account = new BankAccount(50);
    account.deposit(30);

    assert.strictEqual(account.getBalance(), 80);

    assertNoComments(BankAccount);
  });

  optional('should throw error on non-positive deposit', (ctx) => {
    const account = new BankAccount(50);

    try {
      account.deposit(0);
    } catch (error) {
      if (error.message === 'Not implemented') {
        ctx.skip();
      } else {
        assert.throws(() => account.deposit(0), /Deposit must be positive/);
      }
    }

    assertNoComments(BankAccount);
  });

  optional('should withdraw money', () => {
    const account = new BankAccount(100);
    account.withdraw(40);

    assert.strictEqual(account.getBalance(), 60);

    assertNoComments(BankAccount);
  });

  optional('should throw error when withdrawing more than balance', (ctx) => {
    const account = new BankAccount(50);

    try {
      account.withdraw(60);
    } catch (error) {
      if (error.message === 'Not implemented') {
        ctx.skip();
      } else {
        assert.throws(() => account.withdraw(60), /Insufficient funds/);
      }
    }

    assertNoComments(BankAccount);
  });

  optional('should return correct balance with getBalance()', (ctx) => {
    const account = new BankAccount(100);

    assert.strictEqual(account.getBalance(), 100);

    account.deposit(100);

    assert.strictEqual(account.getBalance(), 200);

    account.withdraw(50);

    assert.strictEqual(account.getBalance(), 150);

    assertNoComments(BankAccount);
  });
});
