//类的基本使用
class Person{
    name = "小眭";
    say(){
        return this.name
    }
}

const person = new Person();
console.log(person.say());

//类的继承
class Lady{
    content = "Hi, honey";
    say(){
        return this.content
    }
}

class XiaoJieJie extends Lady{
    sayLove(){
        return 'I love you'
    }
};

const xiaomei = new XiaoJieJie();
console.log(xiaomei.say());
console.log(xiaomei.sayLove());

//类的重写
class JieJie extends Lady{
    say(): string {
        return 'Hi,honey'
    };
    sayLove(){
        return 'I love you'
    }
}


//super关键字的使用---使用父类中的方法
class JieJies extends Lady{
    say() {
        return super.say()+"你好"
    };
    sayLove(){
        return 'I love you'
    }
}


//类的访问类型（private，public，protected）


//public===类的内部和外部都能使用
//private===类的内部才能使用，外部不能使用
//protected====类的内部才能使用，外部不能使用（继承子类中也能使用）




//类的构造函数 constructor

class Persona {
    name:string;
    constructor(name:string){
        this.name = name;
    }
};
const persona = new Persona("test");

//上面的简写
class Personb {
    constructor(public name:string){}
};
const personb = new Personb("test");


//super 构造函数继承


//类的getter，setter和static使用
class TestOne{
    constructor(private _age:number){}
    get age(){
        return this._age;
    };
    set age(age:number){
        this._age = age;
    }
}
const test = new TestOne(28);
test.age = 25;


// static  不用实例对象就可以调用static方法

class TestTwo{
    static say(){
        return '123'
    }
};
console.log(TestTwo.say());


//类的只读属性
class TestThree{
    public readonly _name:string;
    constructor(name:string){
        this._name = name;
    }
}

//类的抽象 abstact
