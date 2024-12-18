# call与apply与bind

> `call`、`apply`、`bind`作用是改变函数执行时的上下文，简而言之就是改变函数运行时的`this`指向
>
> 那么什么情况下需要改变`this`的指向呢？下面举个例子

```js
var name = "lucy";
var obj = {
    name: "martin",
    say: function () {
        console.log(this.name);
    }
};
obj.say(); // martin，this 指向 obj 对象
setTimeout(obj.say,0); // lucy，this 指向 window 对象
```

从上面可以看到，正常情况`say`方法输出`martin`

但是我们把`say`放在`setTimeout`方法中，在定时器中是作为回调函数来执行的，因此回到主栈执行时是在全局执行上下文的环境中执行的，这时候`this`指向`window`，所以输出`lucy`

我们实际需要的是`this`指向`obj`对象，这时候就需要该改变`this`指向了

```js
setTimeout(obj.say.bind(obj),0); //martin，this指向obj对象
```

## apply

apply能劫持另外一个对象的方法，继承另外一个对象的属性

Function.apply(obj,args)方法能接收两个参数

- obj 这个对象将代替Function类里this对象
- args 这个是数组，它将作为参数传给Function（args-->arguments）

### 示例-劫持另外一个对象的方法，继承另外一个对象的属性

```js
var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName: "Bill",
    lastName: "Gates",
}
person.fullName.apply(person1);  // "Bill Gates"
```

### 示例-带参数的 apply() 方法

```js
var person = {
  fullName: function(city, country) {
    return this.firstName + " " + this.lastName + "," + city + "," + country;
  }
}
var person1 = {
  firstName:"Bill",
  lastName: "Gates"
}
person.fullName.apply(person1, ["Oslo", "Norway"]);
```

### 示例

```js
function Person(name, age) {
  this.name = name
  this.age = age
}
function Student(name, age, grade) {
  console.log(this, arguments) // {} { [Iterator]  0: 'zhangsan', 1: 21, 2: '一年级' }
  Person.apply(this, arguments)
  this.grade = grade
}
const student = new Student("zhangsan", 21, "一年级")
console.log(student) // { name: 'zhangsan', age: 21, grade: '一年级' }
```

## call

Function.call(obj,[param1[,param2[,…[,paramN]]]])
obj：这个对象将代替Function类里this对象
params：这个是一个参数列表

相同

1.都是用来重定义 this 指向

2.第一个参数都是 this 的指向对象

不同

1,bind 返回的是一个新的函数

2.参数不同

## bind

### 原理

1. bind的函数挂在Function的原型上
2. bind方法与call&apply最大的不同就是前者返回一个绑定上下文的函数，而后者是直接执行了函数；bind方法返回的函数，可以继续添加参数



