## 介绍
1. [async function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
2. [await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)
3. [兼容性](https://caniuse.com/#search=async%20function)

## DEMO
1. 请求数据a，根据a的结果，请求数据b，根据b的结果，请求数据c，根据c的结果，请求数据d。根据数据d渲染页面。
2. 关于错误处理
3. 页面数据用到a,b,c三个接口的数据。
4. 请求数据a，根据返回a的结果请求b。请求数据c，根据返回c的解说请求d。根据数据b,d渲染页面
5. 先请求数据a。根据a的数据请求b。根据a，b请求c。
6. 请求a和b。如果a先返回则显示a。如果b先返回则等待，a返回后显示a,再显示b。
7. 两道道特别的面试题。
8. 关于fetch的特殊处理。

## 与Promise的不同之处
1. 简洁，符合语义。
2. 错误处理
3. 调试
4. 优化JavaScript引擎的执行方式
    1. [Asynchronous stack traces: why await beats Promise#then(原文)](https://mathiasbynens.be/notes/async-stack-traces)
    2. [从JS引擎理解Await 与.then()的堆栈处理（译文）](https://zhuanlan.zhihu.com/p/40072557)
5. TS，babel都可以编译。

## 问题
1. 如果需要编译的话，会产生大量的冗余代码。
2. 标准一直在改变。
    1. [async/await 在chrome 环境和 node 环境的 执行结果不一致，求解？](https://www.zhihu.com/question/268007969/answer/339811998)
    2. [JS task到底是怎么运行的](https://github.com/rhinel/blog-word/issues/4)
    3. [promise, async, await, execution order #60](https://github.com/xianshenglu/blog/issues/60)
    4. [What's the difference between resolve(thenable) and resolve('non-thenable-object')?](https://stackoverflow.com/questions/53894038/whats-the-difference-between-resolvethenable-and-resolvenon-thenable-object)

## 结论
1. Promise更适合做对于操作的封装。
2. async/await更适合做对于业务的封装。

## 第三方异步库的推荐
    [RxJS](https://github.com/Reactive-Extensions/RxJS)
    [redux-saga](https://github.com/redux-saga/redux-saga)
