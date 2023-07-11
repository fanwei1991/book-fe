# vue间组件通信有哪些？

整理vue中8种常规的通信方案

1. 通过 props 传递
2. 通过 $emit 触发自定义事件
3. 使用 ref
4. EventBus
5. $parent 或 $root
6. attrs 与 listeners
7. Provide 与 Inject
8. Vuex
9. pinia

## `$parent` 或 `$root`
通过共同祖辈$parent或者$root搭建通信桥连

兄弟组件
```
this.$parent.on('add',this.add)
```

另一个兄弟组件
```
this.$parent.emit('add')
```

## `$attrs` 与 `$listeners`

- 适用场景：祖先传递数据给子孙
- 设置批量向下传属性$attrs和 $listeners
- 包含了父级作用域中不作为 prop 被识别 (且获取) 的特性绑定 ( class 和 style 除外)。
- 可以通过 v-bind="$attrs" 传⼊内部组件

```js
// child：并未在props中声明foo  
<p>{{$attrs.foo}}</p>  
  
// parent  
<HelloWorld foo="foo"/>  
```

```js
<parent :a="a" :b="b" @changeA="xxx"></parent>

<child v-bind="$attrs" v-on="$listeners"></child>

<grandson @click="changeA">{{$attrs.a}}</grandson>

const changeA = function () {
  this.$emit('changeA', 1)
}
```
