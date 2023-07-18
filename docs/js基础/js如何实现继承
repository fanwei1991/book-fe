# js 如何实现继承

继承的优点：
继承可以使得子类具有父类的额各种属性和方法，而不需要再次编写相同的代码。


### 实现方式

- 原型链继承 （将父类的实例作为子类的原型）
```js
  function Parent() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
  }
  function Child() {
    this.type = 'child2';
  }
  Child1.prototype = new Parent();
  console.log(new Child())
```
存在问题：多个实例共用一个原型对象

- 构造函数继承
```js
function Parent(){
    this.name = 'parent1';
}

Parent.prototype.getName = function () {
    return this.name;
}

function Child(){
    Parent1.call(this);
    this.type = 'child'
}

let child = new Child();
console.log(child);  // 没问题
console.log(child.getName());  // 会报错

```
- 组合继承 （原型链+构造函数）
```js
function Parent3 () {
    this.name = 'parent3';
    this.play = [1, 2, 3];
}

Parent3.prototype.getName = function () {
    return this.name;
}
function Child3() {
    // 第二次调用 Parent3()
    Parent3.call(this);
    this.type = 'child3';
}

// 第一次调用 Parent3()
Child3.prototype = new Parent3();
// 手动挂上构造器，指向自己的构造函数
Child3.prototype.constructor = Child3;
var s3 = new Child3();
var s4 = new Child3();
s3.play.push(4);
console.log(s3.play, s4.play);  // 不互相影响
console.log(s3.getName()); // 正常输出'parent3'
console.log(s4.getName()); // 正常输出'parent3'

// 父级构造函数执行了2次，产生了不必要的性能开销
```
- 原型式继承
```js
let parent4 = {
    name: "parent4",
    friends: ["p1", "p2", "p3"],
    getName: function() {
      return this.name;
    }
  };

  let person4 = Object.create(parent4);
  person4.name = "tom";
  person4.friends.push("jerry");

  let person5 = Object.create(parent4);
  person5.friends.push("lucy");

  console.log(person4.name); // tom
  console.log(person4.name === person4.getName()); // true
  console.log(person5.name); // parent4
  console.log(person4.friends); // ["p1", "p2", "p3","jerry","lucy"]
  console.log(person5.friends); // ["p1", "p2", "p3","jerry","lucy"]
  // 引用类型指向相同的内存地址，存在篡改的可能
```
- 寄生式继承
```js
let parent5 = {
    name: "parent5",
    friends: ["p1", "p2", "p3"],
    getName: function() {
        return this.name;
    }
};

function clone(original) {
    let clone = Object.create(original);
    clone.getFriends = function() {
        return this.friends;
    };
    return clone;
}

let person5 = clone(parent5);

console.log(person5.getName()); // parent5
console.log(person5.getFriends()); // ["p1", "p2", "p3"]
// 在原型式继承上进行增强，缺点一样，无法解决引用类型问题
```

- 寄生组合式继承
```js
function Parent6 () {
  this.name = 'parent6'
  this.play = [1,2,3]
}

Parent6.prototype.getName = function () {
  return this.name
}

function Child6 () {
  Parent6.call(this)
  this.firends = 'child5'
}

function clone (parent, child) {
  child.prototype = Object.create(parent.prototype)
  child.prototype.constructor = child

  Child6.prototype.getFriends = function () {
    return this.friends;
}

let person6 = new Child6();
console.log(person6); //{friends:"child5",name:"child5",play:[1,2,3],__proto__:Parent6}
console.log(person6.getName()); // parent6
console.log(person6.getFriends()); // child5
}
```

### es6 继承
```js
class Person {
  constructor (name) {
    this.name = name
  }

  getName () {
    return this.name
  }
}

class Student extends Person {
  constructor (name, age) {
    super(name)
    this.age = age
  }
}

const zhangsan = new Student('zhangsan', 10)

zhangsan.getName()

```
> constructor 是一种用于创建和初始化class创建的对象的特殊方法

