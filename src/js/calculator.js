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

  saturnAge(){
    return (this.age / 29.4).toFixed(3);
  }

  uranusAge(){
    return (this.age / 84.02).toFixed(3);
  }

  neptuneAge(){
    return (this.age / 164.8).toFixed(3);
  }

  plutoAge(){
    return (this.age / 247.94).toFixed(3);
  }

  mercuryYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 0.24).toFixed(2);
    if (yearsLeft >= 0){
      return `On Mercury, you have ${yearsLeft} years to live.`;
    } else {
      return `On Mercury, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }

  venusYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 0.62).toFixed(2);
    if (yearsLeft >= 0){
      return `On Venus, you have ${yearsLeft} years to live.`;
    } else {
      return `On Venus, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }

  marsYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 1.88).toFixed(2);
    if (yearsLeft >= 0){
      return `On Mars, you have ${yearsLeft} years to live.`;
    } else {
      return `On Mars, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }

  jupiterYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 11.86).toFixed(2);
    if (yearsLeft >= 0){
      return `On Jupiter, you have ${yearsLeft} years to live.`;
    } else {
      return `On Jupiter, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }

  saturnYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 29.4).toFixed(3);
    if (yearsLeft >= 0){
      return `On Saturn, you have ${yearsLeft} years to live.`;
    } else {
      return `On Saturn, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }

  uranusYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 84.02).toFixed(3);
    if (yearsLeft >= 0){
      return `On Uranus, you have ${yearsLeft} years to live.`;
    } else {
      return `On Uranus, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }

  neptuneYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 164.8).toFixed(3);
    if (yearsLeft >= 0){
      return `On Neptune, you have ${yearsLeft} years to live.`;
    } else {
      return `On Neptune, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }

  plutoYearsLeft(){
    let yearsLeft = ((this.lifeExpect - this.age) / 247.94).toFixed(3);
    if (yearsLeft >= 0){
      return `On Pluto, you have ${yearsLeft} years to live.`;
    } else {
      return `On Pluto, you have lived ${yearsLeft * -1} years longer than expected.`;
    }
  }
}