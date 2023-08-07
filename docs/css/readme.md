# 什么是BFC

> `BFC` 块级格式化上下文，页面上一个隔离的独立容器，内部元素不会影响到外部元素。

### 触发条件

- 根元素，HTML
- 浮动元素： float: left； right;
- overflow值不为hidden;
- disply: inline-block/tanbel-cell/table-caption/table/flex/inline-flex/grid/inline-grid
- position: absolute fixed

### 使用场景

- 防止margin重叠
- 防止浮动元素产生的高度塌陷
- BFC 不会与浮动元素重叠


