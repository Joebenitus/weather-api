export default class User{
  constructor(age, lifeExpect){
    this.age = age;
    this.lifeExpect = lifeExpect;
  }

  mercuryAge(age){
    return (age / 0.24).toFixed(2);
  }

  venusAge(age){
    return (age / 0.62).toFixed(2);
  }

  marsAge(age){
    return (age / 1.88).toFixed(2);
  }

  jupiterAge(age){
    return (age / 11.86).toFixed(2);
  }

  mercuryLifeExpect(){

  }
}