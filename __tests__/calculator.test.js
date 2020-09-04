import User from './../src/js/calculator.js';

describe('User', () => {
  test('should create user object', () => {
    let user = new User(40);
    expect(user.age).toEqual(40);
  });

  test('should output the user\'s age on Mercury', () => {
    let user = new User(40);
    expect(user.mercuryAge()).toEqual("166.67");
  });
});