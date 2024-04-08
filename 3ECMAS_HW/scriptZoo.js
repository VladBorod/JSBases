// Вы разрабатываете систему управления животными в зоопарке. Вам нужно создать класс ZooAnimal, который будет иметь следующие характеристики:

// Приватные поля:
// * #name: имя животного (строка).
// * #age: возраст животного (число).
// * #gender: пол животного (строка).
// Публичные методы:
// * constructor(name, age, gender): конструктор класса, который инициализирует поля #name, #age и #gender.
// * changeName(newName): изменяет имя животного на новое.
// * changeAge(newAge): изменяет возраст животного на новый.

// Статическое поле:
// * MAX_AGE: максимально допустимый возраст для всех создаваемых объектов (число).

class ZooAnimal {
  static #MAX_AGE = 100;
  #name;
  #age;
  #gender;

  constructor(name, age, gender) {
    this.#name = name;
    if (age > ZooAnimal.#MAX_AGE) {
      throw new Error('Age is too high!');
    }
    this.#age = age;
    this.#gender = gender;
  }
  changeName(newName) {
    this.#name = newName;
  }
  changeAge(newAge) {
    if (newAge > ZooAnimal.#MAX_AGE) {
      throw new RangeError('Age is too high while you set it!');
    }
    this.#age = newAge;
  }

  getName = () => this.#name;
  getAge = () => this.#age;
  getGender = () => this.#gender; 
  setName = (name) => this.#name = name;
  setGender = (gender) => this.#gender = gender;

  dispayInfo = () => {
    console.log(`Animal name: ${this.getName()} \nage: ${this.getAge()}\ngender: ${this.getGender()}`);
  }
}

const zooAnimal1 = new ZooAnimal('Sharik', 10, 'male');
console.log(zooAnimal1.getName());
console.log(zooAnimal1.dispayInfo());
zooAnimal1.changeAge(99);
console.log(zooAnimal1.getAge());

const zooAnimal2 = new ZooAnimal('Belka', 101, 'female');