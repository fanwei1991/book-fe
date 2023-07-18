# new 和 Object.create 区别

- new Object() 关键字创建的对象是Objec的实例，继承Object内置方法

- Object.create(arg, pro) 创建对象的原型取决于`arg`，如果arg为null,则创建的新对象没有原型

### 自己实现Object.create 方法
```js
Object.prototype.myCreate = function (arg, pro){
  function F() {}
  F.prototype = arg
  if (pro) {
    Object.definePropertys(F, pro)
  }
  return new F()
}

```

### new 操作符都做了什么
- 创建一个新的对象obj
- 将对象和构造函数通过原型链关联起来
- 将构造函数中的this绑定到新的对象
- 根据构建函数返回类型作判断，如果是原始值则被忽略，如果是返回对象，需要正常处理

手写new操作符
```js
function mynew (Fun, ...args) {
  const obj = {}
  obj.__proto__ = Fun.prototype
  let result = Fun.apply(obj, args)
  return result instanceof Object ? result : obj
}

```