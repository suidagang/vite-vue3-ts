const testa = (name: string, age: number, bust: number) => {
  age < 24 && bust >= 90 && console.log(name + "进入面试");
  age >= 24 || (bust < 90 && console.log(name + "进你被淘汰"));
};

const getResume = (name: string, age: number, bust: number) => {
  console.log(name + "年龄是" + age);
  console.log(name + "胸围是" + bust);
};
testa("大脚", 18, 92);
getResume("大脚", 18, 92);

//优化上面代码
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline ?: number;//可有可无
  [propname:string]:any;//其他属性添加
  say():string;//say方法，必须有返回值且为string
}
const girl = {
  name: "大脚",
  age: 18,
  bust: 92,
  waistline:21,
  say(){
      return "欢迎光临"
  },
  teach(){
      return "教语文"
  }
};
//es6 对象约束
class Xiaojiejie implements Girl{
    name="222";
    age = 18;
    bust = 92;
    say(){
        return "欢迎光临"
    }
}

//接口继承
interface Teacher extends Girl{
    teach():string
}

const testaNew = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + "进入面试");
  girl.age >= 24 || (girl.bust < 90 && console.log(girl.name + "进你被淘汰"));
};

const getResumeNew = (girl: Teacher) => {
  console.log(girl.name + "年龄是" + girl.age);
  console.log(girl.name + "胸围是" + girl.bust);
  girl.waistline && console.log(girl.name + "腰围是" + girl.waistline)
};
testaNew(girl);
getResumeNew(girl);
