# loader 和 plugin 之间的区别

### loader 
用于对模块的‘源代码’进行转换。


### plugin 
借助webpack提供的钩子，解决loader无法实现的事。
每个plugin都有一个apply方法，并在特定的生命周期钩子上去出发。

```js
class MyPlugin {
  apply(compiler) {
    complier.hooks.run.tap('MyPlugin', (compilation) => {
      console.log('编译开始...')
    })
  }
}
```
常见生命周期钩子：
- entry-option: 初始化option
- run
- compile: 真正开始编译，创建compilation对象之前
- compilation: 生成完compilation对象
- make: 从entry开始，递归分析依赖，准备对每个模块进行构建
- after-compile: 整个构建过程结束
- emit: 将内存中的文件写入磁盘之前
- after-emit: 文件写入磁盘之后
- done：完成所有编译过程
- failed: 编译失败

### 区别

loader: 编译阶段调用，对源代码进行编译，转换等操作。
plugin: 主要是借助生命周期钩子。

