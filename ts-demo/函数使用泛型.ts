//泛型  --一般用<T>来表示

function join(first:string|number,second:string|number){
    return `${first}${second}`
};
join('jspang','.com');





//现在有个需求是第一个参数是啥类型后面的参数就必须是啥类型===？用泛型
function joins<Jspang>(first:Jspang,second:Jspang){
    return `${first}${second}`
};
joins<string>('jspang','.com');


//泛型数组的使用(方法一):ANY[]
function myFun<ANY>(params:ANY[]){
    return params;
};
myFun<string>(["123",'234'])
//方法二:Array<ANY>
function myFun1<ANY>(params:Array<ANY>){
    return params;
};
myFun1<number>([1,2]);

//多个泛型的定义
function total<T,P>(first:T,second:P){
    return `${first}${second}`
};
total<string,number>('jspang',1)