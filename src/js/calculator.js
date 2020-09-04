export default class User{
  constructor(age, lifeExpect){
    this.age = age;
    this.lifeExpect = lifeExpect;
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

  mercuryYearsLeft(){
    return ((this.lifeExpect - this.age) / 0.24).toFixed(2);
  }

  venusYearsLeft(){
    return ((this.lifeExpect - this.age) / 0.62).toFixed(2);
  }

  marsYearsLeft(){
    
  }
}