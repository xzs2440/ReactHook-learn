## 3-1 React介绍

## 3-2 配置React开发环境

官方脚手架工具 - create-react-app

https://github.com/facebook/create-react-app

只有一个依赖，无需配置，没有锁死

### npx是什么

避免安装全局模块

调用项目内部安装的模块

```react
//安装
npm i -g creat-react-ts
//创建
npx create-react-app （项目名） --template typescript
//启动
npm start
//安装sass
npm node-sass sass-loader --save-dev
```

## 3-3 第一个ts组件

## 3-4 React Hook

React 16.8 带来的全新属性,即将替代class组件的写法

没有破坏性改动 -- 完全可选,百分百向后兼容,没有计划从react移除class

组件很难复用状态逻辑

复杂组件难以理解,尤其是生命周期函数

react组件一直是函数和,使用hook完全拥抱函数

## 3-5 在函数组件使用

hook是一个特殊的函数

## 3-6 useEffect -1

无需清除Effect

## 3-7 useEffect -2

需要清楚的Effect

## 3-8 useEffect -3

控制useEffect的执行

## 3-9自定义Hook -1

将组件逻辑提取到可重用的函数中

## 3-10 自定义Hook -2

Higher order component - HOC - 高阶组件就是一个函数，接受一个组件作为参数，返回一个新的组件

## 3-11 自定义Hook -3

## 3-13 useRef-多次渲染之间的纽带

## 3-14 useContext - 解决多层传递属性

## 3-15 hook规则和其他hook

hook规则 --  只在最顶层使用Hook  只在react函数中调用Hook

其他Hook   https://usehooks.com/

​	useRenducer(简化复杂的useState，让逻辑更加清楚而存在的)

​	useCallback（为了性能调优，在多次渲染中能够记住某个函数，再次渲染就不用重新创建对象）

​	useMemo

​	useRef

​	useImperativeHandle

​	useLayoutEffert

​	useDebugValue