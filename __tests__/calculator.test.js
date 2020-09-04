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
    expect(user.jupiterAge()).toEqual("3.37");
  });

  test('should take the user\'s life expectancy as parameter of user object', () => {
    let user = new User(40, 80);
    expect(user.lifeExpect).toEqual(80);
  });

  test('should calculate the years the user has left to live on Mercury', () => {
    let user = new User(40, 50);
    expect(user.mercuryYearsLeft()).toEqual("On Mercury, you have 41.67 years to live.");
  });

  test('should calculate the years the user has left to live on Venus', () => {
    let user = new User(40, 50);
    expect(user.venusYearsLeft()).toEqual("On Venus, you have 16.13 years to live.");
  });

  test('should calculate the years the user has left to live on Mars', () => {
    let user = new User(40, 50);
    expect(user.marsYearsLeft()).toEqual("On Mars, you have 5.32 years to live.");
  });

  test('should calculate the years the user has left to live on Jupiter', () => {
    let user = new User(40, 50);
    expect(user.jupiterYearsLeft()).toEqual("On Jupiter, you have 0.84 years to live.");
  });

  test('should output the user\'s age on Uranus', () => {
    let user = new User(40, 50);
    expect(user.uranusAge()).toEqual("0.48");
  });
});