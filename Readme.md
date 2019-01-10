# 1. 介绍
1. [async function](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/async_function)
2. [await](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/await)
3. [兼容性](https://caniuse.com/#search=async%20function)
# 2. 与Promise的不同之处
1. 简洁，符合语义。
2. 错误处理
3. 调试
4. 优化JavaScript引擎的执行方式
    1. [Asynchronous stack traces: why await beats Promise#then(原文)](https://mathiasbynens.be/notes/async-stack-traces)
    2. [从JS引擎理解Await 与.then()的堆栈处理（译文）](https://zhuanlan.zhihu.com/p/40072557)
5. TS，babel都可以编译。

## 3. 问题
1. 如果需要编译的话，会产生大量的冗余代码。
2. 标准一直在改变。[async/await 在chrome 环境和 node 环境的 执行结果不一致，求解？](https://www.zhihu.com/question/268007969/answer/339811998)

## 4. 结论
1. Promise更适合做对于操作的封装。
2. async/await更适合做对于业务的封装。

## 5. 第三方异步库的推荐
    [RxJS](https://github.com/Reactive-Extensions/RxJS)
    [redux-saga](https://github.com/redux-saga/redux-saga)
