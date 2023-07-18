# var、let、const 直接的区别

### var
1. var 声明的变量是全局变量，存在变量提升的情况。
2. 可重复声明

### let
1. let只在代码块内有效
2. 不存在变量提升 （ReferenceError）
3. 在相同作用域内不可重复声明

### const
1. 一旦声明后不可修改

var 不存在块级作用域，let和const存在