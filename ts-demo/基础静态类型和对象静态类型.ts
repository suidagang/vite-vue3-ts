//基础静态类型
let userName : string = "眭刚";
let userAge : number = 32;
// 总共包含：string number boolean null undefined vold symbol

//对象静态类型

//①===普通类型

const testObj : {
    uname: string,
    uage: number
} = {
    uname:"123",
    uage:15
};

//②====数组
const listArr :string[]=["123",'3','3333'];

//③====对象
class Person{};
const xiaohong : Person = new Person();

//④====箭头函数
const xioajiejie: ()=>string = () =>{return 'qq'};