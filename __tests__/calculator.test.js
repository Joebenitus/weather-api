import User from './../src/js/calculator.js';

describe('User', () => {
  test('should create user object', () => {
    let user = new User(40);
    expect(user.age).toEqual(40);
  });

  test('should output the user\'s age on Mercury', () => {
    let user = new User(40);
    expect(user.mercuryAge(user.age)).toEqual("166.67");
  });

  test('should output the user\'s age on Venus', () => {
    let user = new User(40);
    expect(user.venusAge(user.age)).toEqual("64.52");
  });

  test('should output the user\'s age on Mars', () => {
    let user = new User(40);
    expect(user.marsAge(user.age)).toEqual("21.28");
  });

  test('should output the user\'s age on Jupiter', () => {
    let user = new User(40);
    expect(user.jupiterAge(user.age)).toEqual("3.37");
  });

  test('should take the user\'s life expectancy as parameter of user object', () => {
    let user = new User(40, 80);
    expect(user.lifeExpect).toEqual(80);
  });

  test('should calculate the years the user has left to live on Mercury', () => {
    let user = new User(40, 80);
    expect(user.mercuryLifeExpect()).toEqual(80);
  });
});