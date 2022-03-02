<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
    mounted() {
        this.baseType(); //11种基础类型定义
        this.interfaceDemo(); //interface接口
        this.classType(); //类
        this.genericType(); //泛型
        this.interfaceOrType(); //接口（interface）和类型别名type
        this.getDeclare(); //Declare声明文件
    },
    methods: {
        /**
         * Declare关键字
         * */
        getDeclare() {
            //我们在.ts中使用的第三方库时没有.d.ts声明文件的时候，我们可以通过declare来写申明文件。
            //可以声明该模块，甚至可以直接声明一个值为any的同名的变量，然后我们就可以在代码中直接使用该三方库了。
        },
        /**
         * 介绍接口（interface）和类型别名type的区别和使用场景
         * @description 一般来说，能用interface实现，就用interface，如果不能就用type
         */
        interfaceOrType() {
            // 相同点一：都可以描述一个对象或者函数,type 和 interface 的语法不一样，type 需要等号，而 interface 不需要等号
            interface User {
                // 描述一个对象
                name: string;
                age: number;
            }
            interface SetUser {
                // 描述一个函数
                (name: string, age: number): void;
            }
            type UserType = {
                // 描述一个对象
                name: string;
                age: number;
            };

            type SetUserType = {
                // 描述一个函数
                (name: string, age: number): void;
            };
            let test: SetUserType;
            test = function (name: string, age: number): void {
                console.log(111);
            };
            // 相同点二：都允许拓展（extends）属性继承
            //1.interface属性继承
            interface dudu1 {
                name: string;
            }
            interface dudu2 extends dudu1 {
                age: number;
            }
            const duduTest: dudu2 = { name: "zyb", age: 23 };
            //2.type类型继承type类型
            type Nametype = {
                name: string;
            };
            type UserType1 = Nametype & { age: number };
            const valueType: UserType1 = { name: "zyb", age: 23 };
            //3.interface extends type (接口继承类型)
            type LulvwaType = {
                name: string;
            };
            interface LulvwaFace extends LulvwaType {
                age: number;
            }
            const LulvwaValue: LulvwaFace = { name: "zyb", age: 23 };
            //4.type extends interface (类型继承接口)
            interface shajFace {
                name: string;
            }
            type shajType = shajFace & {
                age: number;
            };
            const shajValue: shajType = { name: "zyb", age: 23 };

            // 不同点一：type 可以声明基本类型别名，联合类型，元组等类型，而 interface 不行
            //1、 基本类型别名
            type DiffName = string;
            // 2.联合类型
            interface Dog {
                wong(): void;
            }
            interface Cat {
                miao(): void;
            }
            type Pet = Dog | Cat;
            // 具体定义数组每个位置的类型
            type PetList = [Dog, Pet];
            //2.type语句中还可以使用typeof获取实例的类型进行赋值
            let div = document.createElement("div");
            type B = typeof div;
            //3.type其他骚操作
            type StringOrNumber = string | number;
            type Text = string | { text: string };
            type Callback<T> = (data: T) => void;
            type Pair<T> = [T, T];
            type Coordinates = Pair<number>;
            type Tree<T> = T | { left: Tree<T>; right: Tree<T> };
            //4.interface能够声明合并
            interface User {
                name: string;
                age: number;
            }

            interface User {
                sex: string;
            }
        },
        /**
         * 泛型
         * @des 泛型代表的是泛指某一类型，更像是一个类型变量。由尖括号包裹<T>
         * @des 主要作用是创建逻辑可复用的组件
         * @des 泛型可以作用在函数、类、接口上
         */
        genericType() {
            //***************定义函数*****************/
            function greet<T>(arg: T): T {
                return arg;
            }
            //***************定义类*****************/
            class GenericNumber<T> {
                zeroValue: T;
                add: (x: T, y: T) => T;
                constructor(zeroValue: T, add: (x: T, y: T) => T) {
                    this.zeroValue = zeroValue;
                    this.add = add;
                }
            }

            let myGenericNumber = new GenericNumber<number>(1, (a, b) => a + b);
            myGenericNumber.zeroValue = 0;
            const result = myGenericNumber.add(40, 2);
            //***************定义接口*****************/
            // 第一种定义方式：泛型接口
            interface ConfigFns {
                <T>(value1: T): T; // 泛型接口
            }
            var getData: ConfigFns = function <T>(value1: T): T {
                return value1;
            };
            getData<string>("OK");
            // 第二种定义方式
            interface ConfigFnplus<T> {
                (value1: T): T; // 泛型接口
            }
            function getData1<T>(value1: T): T {
                return value1;
            }
            var myGetData: ConfigFnplus<string> = getData1;
            myGetData("OK,wo");
            //***************泛型约束(泛型还可以被约束，这样就不是接受任意类型，必须要接受有length属性的对象)*****************/
            interface TIF {
                length: number;
            }
            function test<T extends TIF>(params: T) {
                console.log("=========>>>", params.length);
            }
            console.log(test("abc"));
            //***************定义泛型约束之类型参数*****************/
            function getPropoty<T, K extends keyof T>(obj: T, key: K) {
                return obj[key];
            }
            let obj = { a: 1, b: "2", c: 3 };
            console.log(getPropoty(obj, "c"), "---参数");
        },
        /**
         * 11种基础类型定义
         * @des number、string、boolean、Array、Tuple(元组)、enum(枚举)、object、never、void、null和undefined、any
         */
        baseType() {
            //***************①number  除了第一个都是进制*****************/
            let decLiteral: number = 6;
            let hexLiteral: number = 0xf00d;
            let binaryLiteral: number = 0b1010;
            let octalLiteral: number = 0o744;
            //***************string*****************/
            let name: string = "bob";
            // 字符串模板
            let age: number = 37;
            let name1: string = `Gene`;
            let sentence: string = `Hello, my name is ${name1}.I'll be ${
                age + 1
            } years old next month.`;
            //***************boolean*****************/
            let isDone: boolean = false;
            //***************Array*****************/
            let list: number[] = [1, 2, 3];
            let list1: Array<number> = [1, 2, 3]; //泛型
            //***************Tuple(元组)*****************/
            let x: [string, number];
            x = ["hello", 10];
            //***************enum(枚举)*****************/
            enum Color {
                Red,
                Green,
                Blue,
            } //默认为0,1,2
            let c: Color = Color.Green;
            //手动赋值
            enum Color1 {
                Red = 1,
                Green = 2,
                Blue = 4,
            }
            let c1: Color1 = Color1.Green;
            // 手动赋值 从几开始
            enum Color2 {
                Red = 1,
                Green,
                Blue,
            } //1,2,3
            // 数字枚举可以被混入到 计算过的和常量成员
            function getSomeValue() {
                return 1;
            }
            enum E {
                A = getSomeValue(),
                //B, // error! 'A' is not constant-initialized, so 'B' needs an initializer
            }
            //字符串枚举
            enum DirectionString {
                Up = "UP",
                Down = "DOWN",
                Left = "LEFT",
                Right = "RIGHT",
            }
            //异构枚举(举可以混合字符串和数字成员，但是似乎你并不会这么做)
            enum BooleanLikeHeterogeneousEnum {
                No = 0,
                Yes = "YES",
            }
            //***************object*****************/
            let obj: Object;
            //***************never(never类型表示的是那些永不存在的值的类型)*****************/
            // 返回never的函数必须存在无法达到的终点
            function error(message: string): never {
                throw new Error(message);
            }
            //***************void(函数没有返回值时)*****************/
            function warnUser(): void {
                console.log("This is my warning message");
            }
            //***************null和undefined*****************/
            let u: undefined = undefined;
            let n: null = null;
            //***************any*****************/
            let notSure: any = 4;
            notSure = "maybe a string instead";
            notSure = false; // okay, definitely a boolean
        },
        /**
         * interface接口几种方式
         * @des 定义对象、定义数组、定义函数、定义类、接口相互继承、可选属性和额外检查
         */
        interfaceDemo() {
            // 接口 interface 相关定义 ---start====

            //***************①定义对象*****************/
            interface Cat {
                color: string;
            }
            let yellowCat: Cat = {
                color: "yellow",
            };
            //***************①定义数组*****************/
            interface List {
                [index: number]: string;
            }
            let list: List = ["one", "two"];
            //***************①定义函数*****************/
            // 普通的接口
            interface discount1{
                getNum : (price:number) => number
            }
            function testFun(discount1: discount1):void{
                console.log(discount1.getNum);
            }
            // 函数类型接口
            interface discount2{
                // 注意:
                // “:” 前面的是函数的签名，用来约束函数的参数
                // ":" 后面的用来约束函数的返回值
                (price:number):number
            }
            let cost:discount2 = function(price:number):number{
                return price * .8;
            }
            interface Fun {
                (name: string): void;
            }
            let fun: Fun = function (a: string) {
                console.log(a);
            };
            //***************①定义类*****************/
            interface Person {
                name: string;
                age: number;
            }
            class People implements Person {
                name: string;
                age: number;
                constructor(name: string, age: number) {
                    this.name = name;
                    this.age = age;
                }
            }

            //***************①接口相互继承*****************/
            interface Shape {
                color: string;
            }
            interface Sqaure extends Shape {
                sideLength: number;
            }
            let square: Sqaure = {
                color: "red",
                sideLength: 11,
            };
            //***************①可选属性和额外检查*****************/
            interface TestConfig {
                color?: string;
                width?: number;
                [propsName: string]: any;
            }
            function createTest(config: TestConfig): any {}
            let myTest = createTest({ color: "red", width: 20 });
            // ***********可索引类型接口***********/
            // 数字索引——约束数组
            // index 是随便取的名字，可以任意取名
            // 只要 index 的类型是 number，那么值的类型必须是 string
            interface StringArray {
                // key 的类型为 number ，一般都代表是数组
                // 限制 value 的类型为 string
                [index: number]: string;
            }
            let arr: StringArray = ["aaa", "bbb"];
            console.log(arr);
            // 字符串索引——约束对象
            // 只要 index 的类型是 string，那么值的类型必须是 string
            interface StringObject {
                // key 的类型为 string ，一般都代表是对象
                // 限制 value 的类型为 string
                [index: string]: string;
            }
            let obj: StringObject = { name: "ccc" };

            //函数重载
            function attr(val: any): any {
                if (typeof val === 'string') {
                    return val;
                } else if (typeof val === 'number') {
                    return val;
                } 
            }

            alert(attr('aaa'));
            attr(666);
            // 接口 interface 相关定义 ---end====
        },
        /**
         * 类的介绍
         * @des 公有成员（public）、私有成员（private）、被保护的成员（protected）、静态属性（static）
         * @des 继承 extends
         * @des 抽象类 abstract
         */
        classType() {
            class tsClass {
                public a: string; //公有成员
                private b: number[]; //私有成员
                protected c: string[]; //被保护的成员
                static e: string = "e"; //静态属性
                constructor(astr: string, barr: number[], carr: string[]) {
                    this.a = astr;
                    this.b = barr;
                    this.c = carr;
                }
            }
            class SublevelCla extends tsClass {
                private dname: string; //私有成员
                constructor(
                    astr: string,
                    barr: number[],
                    carr: string[],
                    dname: string
                ) {
                    super(astr, barr, carr); //继承tsClass构造字段
                    this.dname = dname; //sublevelCla自身构造字段
                }
                fun(): void {
                    console.log(tsClass.e); //通过类获取静态成员
                }
            }
            let sub = new SublevelCla(
                "a",
                [1, 2, 3],
                ["a", "b", "c"],
                "sublevelName"
            );
            sub.fun();
            console.log(sub.a);
            // console.log(sub.b); //报错:私有成员不能被外部访问
            // console.log(sub.c); //报错：被保护的成员不能被外部访问
            // console.log(sub.dname); //报错：私有成员不能被外部访问

            // -----=抽象类=-----（抽象类做为其它派生类的基类使用。 它们一般不会直接被实例化。 不同于接口，抽象类可以包含成员的实现细节。 abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法。）
            abstract class Department {
                constructor(public name: string) {}

                printName(): void {
                    console.log("Department name: " + this.name);
                }

                abstract printMeeting(): void; // 必须在派生类中实现
            }

            class AccountingDepartment extends Department {
                constructor() {
                    super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
                }

                printMeeting(): void {
                    console.log(
                        "The Accounting Department meets each Monday at 10am."
                    );
                }

                generateReports(): void {
                    console.log("Generating accounting reports...");
                }
            }

            let department: Department; // 允许创建一个对抽象类型的引用
            // department = new Department(); // 错误: 不能创建一个抽象类的实例
            department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
            department.printName();
            department.printMeeting();
            // department.generateReports(); // 错误: 方法在声明的抽象类中不存在
        },
    },
});
</script>
