import assert from 'power-assert';
import {Person} from '../src/person';

describe('Person', () => {
  let alice = new Person("alice", 12);
  it("#mistake", () => {
    assert(alice.name.length === 4);
  });
});
