let testArr = [1, 2, 3];
// numberArr[4]="222";

//数组单类型
let numberArr: number[] = [1, 2];
let stringArr: string[] = ["1", "2"];
let undefinedArr: undefined[] = [undefined, undefined];

//数组多个组合
let arr: (number | string)[] = [1, "222", 3];

// 数组对象(第一种定义)
const xiaojiejies: { name: string; age: number }[] = [
  { name: "留意", age: 18 },
  { name: "下雪", age: 28 },
];

//数组对象（第二种定义）类型别名 type alias

// type Lady = { name: string; age: number };
interface Lady{
  name:string;
  age:number;
}

const xiaojiejiesT: Lady[] = [
  { name: "留意", age: 18 },
  { name: "下雪", age: 28 },
];

//数组对象（第三种定义）类的形式

class Madam {
  name: string;
  age: number;
}

const xiaojiejiesThree: Madam[] = [
  { name: "留意", age: 18 },
  { name: "下雪", age: 28 },
];
