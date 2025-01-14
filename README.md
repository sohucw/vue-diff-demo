## 大屏项目

## 说明

### echarts 这里作为公共组件，仅需要传options
注意事项: 生成 options 必须为函数，再 窗口变化时才重新调用，重新赋值 options参数，否则 echarts 中文字不会随窗口变化而变化

## 技术站

### Vue 3 + TypeScript + Vite
1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.



---文案---

用echarts 做图表没什么难度，
难点在图表的大屏适配应该怎么做？ 这个完全可以写到自己的简历项目中，作用项目的亮点和面试官 

怎么做呢？
先看一下 我实现的效果， 这个是react的版本 (https://github.com/sohucw/react18-bigscreen)， 这个是Vue的版本  都做了适配的处理
如果需要代码的可以评论区留言

重点讲一下实现原理，可以按照我下面的这种方式和面试官讲清楚 聊明白
1. 拿到设计稿的尺寸， 

 https://juejin.cn/post/7163932925955112996
实现方式
通过：
1 scale的方式 

1.通过 scale 属性，根据屏幕大小，对图表进行整体的等比缩放
优点：
1.代码量少，适配简单
2.一次处理后不需要在各个图表中再去单独适配
缺点：
1.因为是根据 ui 稿等比缩放，当大屏跟 ui 稿的比例不一样时，会出现周边留白情况
2.当缩放比例过大时候，字体会有一点点模糊，就一点点
3.当缩放比例过大时候，事件热区会偏移。

2. vw vh
.按照设计稿的尺寸，将px按比例计算转为vw和vh
优点：
1.可以动态计算图表的宽高，字体等，灵活性较高
2.当屏幕比例跟 ui 稿不一致时，不会出现两边留白情况
缺点：
1.每个图表都需要单独做字体、间距、位移的适配，比较麻烦


看业务选择
如果需要兼容不同比例的大屏，并且想在不同比例中都有比较好的效果，图表占满屏幕，类似于移动端的响应式，可以采用 vw vh 的方案

先讲明白：采用 vw vh 的技术方案

假设设计稿尺寸为 1920*1080（做之前一定问清楚 ui 设计稿的尺寸）

即：
网页宽度=1920px
网页高度=1080px

我们都知道
网页宽度=100vw
网页宽度=100vh

所以，在 1920px*1080px 的屏幕分辨率下

1920px = 100vw

1080px = 100vh

这样一来，以一个宽 300px 和 200px 的 div 来说，其所占的宽高，以 vw 和 vh 为单位，计算方式如下:

vwDiv = (300px / 1920px ) * 100vw
vhDiv = (200px / 1080px ) * 100vh

所以，就在 1920*1080 的屏幕分辨率下，计算出了单个 div 的宽高

当屏幕放大或者缩小时，div 还是以 vw 和 vh 作为宽高的，就会自动适应不同分辨率的屏幕

代码库地址：  主要screen-adapter-demo   次要large-screen-daptation-vhvw



再讲第2种方案

代码库地址： big-screen-vue3 
文档参考这个： https://juejin.cn/post/7163932925955112996




----- 按需引入包大小的问题！！！！！
screen-vue3:  pluings/echarts.js 按需引入了 echats库 减少了包的大小









## 参考
https://juejin.cn/post/7361615299899605029  
 如果缩小的比例太大 原来的一行三列的图表会变成一行一列 这个时候需要重新计算图表的位置 使用 响应式布局，  
 demo演示：github-screen-web-pc-mobile   
  实现原理代码：https://juejin.cn/post/7268224240108798013









## 大屏项目

## 说明

### echarts 这里作为公共组件，仅需要传options
注意事项: 生成 options 必须为函数，再 窗口变化时才重新调用，重新赋值 options参数，否则 echarts 中文字不会随窗口变化而变化

## 技术站

### Vue 3 + TypeScript + Vite
1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.



---文案---

用echarts 做图表没什么难度，
难点在图表的大屏适配应该怎么做？ 这个完全可以写到自己的简历项目中，作用项目的亮点和面试官 

怎么做呢？
先看一下 我实现的效果， 这个是react的版本 (https://github.com/sohucw/react18-bigscreen)， 这个是Vue的版本  都做了适配的处理
如果需要代码的可以评论区留言

重点讲一下实现原理，可以按照我下面的这种方式和面试官讲清楚 聊明白
1. 拿到设计稿的尺寸， 

 https://juejin.cn/post/7163932925955112996
实现方式
通过：
1 scale的方式 

1.通过 scale 属性，根据屏幕大小，对图表进行整体的等比缩放
优点：
1.代码量少，适配简单
2.一次处理后不需要在各个图表中再去单独适配
缺点：
1.因为是根据 ui 稿等比缩放，当大屏跟 ui 稿的比例不一样时，会出现周边留白情况
2.当缩放比例过大时候，字体会有一点点模糊，就一点点
3.当缩放比例过大时候，事件热区会偏移。

2. vw vh
.按照设计稿的尺寸，将px按比例计算转为vw和vh
优点：
1.可以动态计算图表的宽高，字体等，灵活性较高
2.当屏幕比例跟 ui 稿不一致时，不会出现两边留白情况
缺点：
1.每个图表都需要单独做字体、间距、位移的适配，比较麻烦


看业务选择
如果需要兼容不同比例的大屏，并且想在不同比例中都有比较好的效果，图表占满屏幕，类似于移动端的响应式，可以采用 vw vh 的方案

先讲明白：采用 vw vh 的技术方案

假设设计稿尺寸为 1920*1080（做之前一定问清楚 ui 设计稿的尺寸）

即：
网页宽度=1920px
网页高度=1080px

我们都知道
网页宽度=100vw
网页宽度=100vh

所以，在 1920px*1080px 的屏幕分辨率下

1920px = 100vw

1080px = 100vh

这样一来，以一个宽 300px 和 200px 的 div 来说，其所占的宽高，以 vw 和 vh 为单位，计算方式如下:

vwDiv = (300px / 1920px ) * 100vw
vhDiv = (200px / 1080px ) * 100vh

所以，就在 1920*1080 的屏幕分辨率下，计算出了单个 div 的宽高

当屏幕放大或者缩小时，div 还是以 vw 和 vh 作为宽高的，就会自动适应不同分辨率的屏幕

代码库地址：  主要screen-adapter-demo   次要large-screen-daptation-vhvw



再讲第2种方案

代码库地址： big-screen-vue3 
文档参考这个： https://juejin.cn/post/7163932925955112996




----- 按需引入包大小的问题！！！！！
screen-vue3:  pluings/echarts.js 按需引入了 echats库 减少了包的大小



