class SelectGril{
    constructor(private grils: string[] | number[]){};
    getGrils(index:number):string | number{
        return this.grils[index];
    }
};
const selectGril = new SelectGril(["美女1","美女2","美女3","美女4"]);
console.log(selectGril.getGrils(1));

//使用泛型改造

interface Gril{
    name:string
}
class SelectGrilNew<T extends Gril>{
    constructor(private grils: T[]){};
    getGrils(index:number):string{
        return this.grils[index].name;
    }
};
const selectGrilN = new SelectGrilNew([{
    name:"美女1"
},{
    name:"美女2"
},{
    name:"美女3"
}]);
console.log(selectGril.getGrils(2));

//问题 如果在getGrils函数中要获取name属性 需要继承 interface


//泛型约束 只能为string或者number
//<T extends string | number>