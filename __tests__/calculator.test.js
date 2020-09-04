import User from './../src/js/calculator.js';

describe('User', () => {
  test('should create user object', () => {
    let user = new User(40);
    expect(user.age).toEqual(20);
  });
});