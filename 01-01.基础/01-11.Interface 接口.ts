// interface 和 type 相类似，但并不完全一致
interface Person {
  // 只读属性
  // readonly name: string;
  name: string;
  // 可选属性
  age?: number;
  // 属性类型
  [propName: string]: any;
  say(): string;
}

// 接口的继承
interface Teacher extends Person {
  teach(): string;
}

interface SayHi {
  (word: string): string;
}

const getPersonName = (person: Person): void => {
  console.log(person.name);
};

const setPersonName = (person: Teacher, name: string): void => {
  person.name = name;
};

// 函数中字面量传入ts会强校验每一项，但是变量传入一个对象时只要符合基本项就可以了
const person = {
  name: 'dell',
  sex: 'male',
  say() {
    return 'say hello';
  },
  teach() {
    return 'teach';
  },
};

getPersonName(person);
setPersonName(person, 'lee');

// 类中的接口应用
class User implements Person {
  name = 'dell';
  say() {
    return 'hello';
  }
}

const say: SayHi = (word: string) => {
  return word;
};
