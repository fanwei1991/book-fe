# 说说你对双向绑定的理解

![](https://static.vue-js.com/e5369850-3ac9-11eb-85f6-6fac77c0c9b3.png)

1. 通过Object.defineproperty()对数据进行响应化处理。

2. 依赖收集
```
在Observer的时候会对每个key创建一个Dep,在获取data数据的时候会去触发getter方法并调用第二dep.addDep()方法收集对应的Watcher。

当修改数据的时候会触发setter方法并出发dep.notify()-> this.deps.forEach(dep) => dep.update()
```