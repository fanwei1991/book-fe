# 发布订阅模式和观察者模式的区别

### 观察者模式
观察者模式定义了对象间的一种一对多的依赖关系，当一个对象的状态发生改变时，所有依赖于它的对象都将得到通知，并自动更新

观察者模式属于行为型模式，行为型模式关注的是对象之间的通讯，观察者模式就是观察者和被观察者之间的通讯
```js
// 被观察者
class Subject {
  constructor () {
    this.observerList = []
  }

  addObserver (observer) {
    this.observerList.push(observer)
  }

  notify (msg) {
    this.observerList.forEach(observer => {
      observer.notified(msg)
    })
  }
}
```
```js
// 观察者
class Observer {
  constructor (name, subject) {
    this.name = name
    if (subject) {
      subject.addObserver(this)
    }
  }
  notified (msg) {
    console.log(this.name, msg)
  }
}
```
```js
// 使用
const subject = new Subject()
const observer1 = new Observer('ob1', subject)
const observer2 = new Observer('ob2', subject)

subject.notify('发送新消息')
```
观察者主动申请加入观察者列表，被观察者主动推送消息给观察者


### 发布订阅
> 消息的发送者不会直接将消息发送给订阅者，而是将消息分为不同的类别。订阅者也无需关注消息是谁发布的，只关注订阅了哪些消息。统一通过调度中心。

```js
// 发布者
class Publisher {
  constructor (name, context) {
    this.name = name
    this.context = context
  }

  publish (type, content) {
    this.context.publish(type, content)
  }
}

// 订阅者

class Subcriber {
  constructor (name, context) {
    this.name = name
    this.context = context
  }

  subcribe (type, cb) {
    this.context.subcribe(type, cb)
  }
}

// 调度中心

class PubSub {
  constructor () {
    this.message = {}
    this.listeners = {}
  }

  publish (type, content) {
    const existContent = this.message[type]
    if (!existContent) {
      this.message[type] = []
    }
    this.message[type].push(content)
  }

  subcribe (type, cb) {
    cosnt existListener = this.listeners[type]
    if (!existListener) {
      this.listeners[type] = []
    }
    this.listeners[type].push(cb)
  }

  notify (type) {
    const messages = this.message[type]
    const listeners = this.listeners[type] || []
    listeners.forEach((cb, index) => {
      cb(messages[index])
    })
  }
}
```

```js
// 使用方式
const TYPE_A = 'music';
const TYPE_B = 'movie';
const TYPE_C = 'novel';

const pubsub = new PubSub()

const publisher1 = new Publisher('publisher1', pubsub)
publisher1.publish(TYPE_A, 'pub1 TYPE_A')
publisher1.publish(TYPE_B, 'pub1 TYPE_B')

const publisher2 = new Publisher('publisher2', pubsub)

publisher2.publish(TYPE_B, 'pub2 TYPE_B')

const subcribe1 = new Subcribe('subcribe1', pubsub)
subcribe1.subcribe(TYPE_A, function(res){
  console.log(res)
})

const subcribe2 = new Subcribe('subcribe2', pubsub)
subcribe2.subcribe(TYPE_B, function(res){
  console.log(res)
})

pubsub.notify(TYPE_A)
pubsub.notify(TYPE_B)
```