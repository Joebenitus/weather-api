export default class User{
  constructor(age){
    this.age = age;
  }

  mercuryAge(){
    return (this.age / 0.24).toFixed(2);
  }
}