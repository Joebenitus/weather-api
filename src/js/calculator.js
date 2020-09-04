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
    let yearsLeft = ((this.lifeExpect - this.age) / 0.24).toFixed(2);
    if (yearsLeft >= 0){
      return `On Mercury, you have ${yearsLeft} years to live.`
    } else {
      return `On Mercury, you have lived ${yearsLeft * -1} years longer than average.`
    }
  }

  venusYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 0.62).toFixed(2);
    if (yearsLeft >= 0){
      return `On Venus, you have ${yearsLeft} years to live.`
    } else {
      return `On Venus, you have lived ${yearsLeft * -1} years longer than average.`
    }
  }

  marsYearsLeft(){
    return ((this.lifeExpect - this.age) / 1.88).toFixed(2);
  }

  jupiterYearsLeft(){
    return ((this.lifeExpect - this.age) / 11.86).toFixed(2);
  }
}