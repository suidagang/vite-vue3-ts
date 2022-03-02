function getTotal(one: number, two: number): number {
  //   return one + two+"";
  return one + two;
}

getTotal(1, 2);

//函数有无返回  return
function sayHello(): void {
  console.log("hello world");
  // return ''
}

// 函数执行不完 never
function errorFun(): never {
  throw Error();
  console.log(11);
}

//函数死循环 never
function forNever(): never {
  while (true) {}
  console.log(222);
}

//函数传参是对象
function add({ one, two }: { one: number; two: number }) {
  return one + two;
}
const total = add({ one: 1, two: 2 });

function getNumber({ one }: { one: number }) {
  return one;
}
const one = getNumber({ one: 1 });
