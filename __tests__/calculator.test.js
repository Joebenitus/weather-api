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

  test('should output the user\'s age on Venus', () => {
    let user = new User(40);
    expect(user.venusAge()).toEqual("64.52");
  });

  test('should output the user\'s age on Mars', () => {
    let user = new User(40);
    expect(user.marsAge()).toEqual("21.28");
  });

  test('should output the user\'s age on Jupiter', () => {
    let user = new User(40);
    expect(user.jupiterAge()).toEqual(100);
  });
});