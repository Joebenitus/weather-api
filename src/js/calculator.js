export default class User{
  constructor(age){
    this.age = age;
  }

  mercuryAge(){
    return (this.age / 0.24).toFixed(2);
  }

  venusAge(){
    return (this.age / 0.62).toFixed(2);
  }

  marsAge(){
    return (this.age / 1.88).toFixed(2);
  }

  jupiterAge(){
    return (this.age / 11.86).toFixed(2);
  }
}