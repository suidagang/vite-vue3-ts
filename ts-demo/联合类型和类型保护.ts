interface Waiter {
  anjiao: boolean;
  say: () => {};
}
interface Teacher {
  anjiao: boolean;
  skill: () => {};
}
//animal:Waiter | Teacher 叫着联合类型
//animal as Teacher    as断言
function judgeWho(animal: Waiter | Teacher) {
  if (animal.anjiao) {
    (animal as Teacher).skill();
  } else {
    (animal as Waiter).say();
  }
}

//in 断言
function judgeWhoTwo(animal: Waiter | Teacher) {
  if ("skill" in animal) {
    animal.skill();
  } else {
    animal.say();
  }
}

//typeof 断言
function add(first: string | number, second: string | number) {
    if(typeof first === 'string' || typeof second === 'string'){
        return `${first}${second}`
    }else{
        return first + second;
    }
}

// instanceof 断言
class NumberObj{
    count:number;
}
function adds(first: object | NumberObj,second:object |NumberObj){
    if(first instanceof NumberObj && second instanceof NumberObj){
        return first.count + second.count;
    }
    return 0
}
