# vue实例挂载的过程中发生了什么？

```js
new Vue (options) // 调用 this._init()

Vue.prototype._init = function (){
  ...
  // 初始化组件生命周期标志位
    initLifecycle(vm)
    // 初始化组件事件侦听
    initEvents(vm)
    // 初始化渲染方法
    initRender(vm)

    callHook(vm, 'beforeCreate')
    // 初始化依赖注入内容，在初始化data、props之前
    initInjections(vm) // resolve injections before data/props

    // 初始化props/data/method/watch/methods
    initState(vm)

    initProvide(vm) // resolve provide after data/props

    callHook(vm, 'created')

    /* istanbul ignore if */
    if (process.env.NODE_ENV !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false)
      mark(endTag)
      measure(`vue ${vm._name} init`, startTag, endTag)
    }
    // 挂载元素
    if (vm.$options.el) {
      vm.$mount(vm.$options.el)
    }
}
```

`initState` 方法主要用来初始化 
1. `props` 
2. `methods`
3. `data` 
4. `computed` 
5. `watch`

`vue.$mount(el)` 
1. el 不能是body | html
2. 判断是否存在 render 方法，如不存在，将template转换成render函数，render主要是用来生成vnode
3. 调用 mountComponent 方法渲染组件
4. 触发 beforeMount 钩子

```
template -> render -> vnode -> _update() -> patch() -> DOM
```

