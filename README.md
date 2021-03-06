<p align="center">
<img width=150 src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/logo.png">
</p>
<h1 align="center">AI 如何捕捉超越？</h1>
<p align="center"><b>-- 神经网络3D展示 --</b></p>

<p align="center">
  <a href="https://github.com/tensorspace-team/tensorspace/blob/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-green.svg" alt="license badge"></a>
  <a href="https://github.com/tensorflow/tfjs"><img src="https://img.shields.io/badge/dependencies-TensorFlow.js-brightgreen.svg" alt="dependencies badge"></a>
  <a href="https://github.com/facebook/react"><img src="https://img.shields.io/badge/dependencies-React-brightgreen.svg" alt="dependencies badge"></a>
  <a href="https://github.com/tensorspace-team/tensorspace"><img src="https://img.shields.io/badge/dependencies-TensorSpace-brightgreen.svg" alt="dependencies badge"></a>
</p>

通过神经网络检测不同的杨超越照片，直观展示神经网络是如何从一张图片中检测物体的，类似于 [Lenna](https://baike.baidu.com/item/%E8%8E%B1%E5%A8%9C%C2%B7%E7%91%9F%E5%BE%B7%E8%B4%9D%E9%87%8C/10916076?fr=aladdin) 之于图片预处理。可在 Web3D 交互体验中感受神经网络的工作原理，移动端友好。可用于神经网络学习与教学。

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/helloworld.gif">
</p>
<p align="center">
<b>图1</b> - Hello World
</p>

## 目录

* [项目架构](#architecture)
* [技术栈](#technique)
* [应用功能](#function)
* [开发人员](#contributors)
* [联系方式](#contact)
* [关于代码使用](#license)
* [写在最后](#last)

## <div id="architecture">项目架构</div>

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/architecture.png">
</p>
<p align="center">
<b>图2</b> - 架构图
</p>

## <div id="technique">技术栈</div>

* [TensorFlow.js](https://github.com/tensorflow/tfjs) 改变游戏规则的深度学习框架（最近发布了1.0版本）。
* [YOLO](https://pjreddie.com/darknet/yolo/) “没朋友”的深度学习模型。
* [React](https://github.com/facebook/react) T0级别前端框架。
* [React-toolbox](https://github.com/react-toolbox/react-toolbox) React组件框架。
* [TensorSpace](https://github.com/tensorspace-team/tensorspace) 神经网络3D可视化框架。

~~**PS.**~~

* ~~YOLO作者小马哥关于YOLOv3的论文非常深入浅出，他的个人简历也非常抓人眼球~~

## <div id="function">应用功能</div>

* 环顾立体网络

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/left_drag.gif">
</p>
<p align="center">
<b>图3</b> - 左键推拽旋转网络
</p>

* 平移网络

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/right_drag.gif">
</p>
<p align="center">
<b>图4</b> - 右键拖拽平移网络
</p>

* 开近拉远3D场景

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/zoom.gif">
</p>
<p align="center">
<b>图5</b> - 滑动滚轮或双指在触摸板上滑动对场景进行放大缩小
</p>

* 观察神经网络特性

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/feature_map.gif">
</p>
<p align="center">
<b>图6</b> - 从网络中可以观察到：结构、特征图、数据流动方向等特性
</p>

* 切换预测数据

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/change.gif">
</p>
<p align="center">
<b>图7</b> - 点击“新的超越”，输入不同的图片进行检测
</p>

* 清空并重置网络

<p align="center">
<img width="100%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/reset.gif">
</p>
<p align="center">
<b>图8</b> - 点击“我想静静”重置
</p>

* 移动端友好

<p align="center">
<img width="50%" src="https://github.com/syt123450/ycy-detection-3d/blob/master/assets/responsive.gif">
</p>
<p align="center">
<b>图9</b> - 手机端演示
</p>

## <div id="contributors">开发人员</div>

Thanks goes to these wonderful people ([emoji key](https://github.com/kentcdodds/all-contributors#emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore -->
| [<img src="https://avatars2.githubusercontent.com/u/7977100?v=4" width="100px;" alt="syt123450"/><br /><sub><b>syt123450</b></sub>](https://github.com/syt123450)<br />[💻](https://github.com/syt123450/ycy-detection-3d/commits?author=syt123450 "Code") [🎨](#design-syt123450 "Design") [📖](https://github.com/syt123450/ycy-detection-3d/commits?author=syt123450 "Documentation") [💡](#example-syt123450 "Examples") |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

## <div id="contact">联系方式</div>

若有任何疑问建议，欢迎通过以下方式交流：

* ccyyycy/ycy 仓库 issue
* 在本仓库创建一个新的[issue](https://github.com/syt123450/ycy-detection-3d/issues/new)
* Email: syt123450@gmail.com

## <div id="license">关于代码使用</div>

### 关于开源协议

* 使用最宽松的 MIT 协议，在 fork 仓库之后，可以对 fork 仓库中的代码为所欲为。
* 如果有一天它变成别的协议了（比如 GLP 等），那么应该是被盗号了，我会尽快向 Github 申诉。

### 关于功能复用

如果希望将这个项目作为一个组件加到自己的网站中，不妨试试以下三种方式：

* **跳转**：现在应用有一个固定的域名 [https://ycy-neuralnetwork3d.com](https://ycy-neuralnetwork3d.com)，目测路由方式不会变，可以使用这个域名进行跳转。不过不保证今后有一天重构将它修改了？所以如果需要跳转的话，最好能够不时戳一下这个链接，确认是否还`活着`。

* **iframe**：不少站长都不喜欢跳转到外链，这个应用是单页面，且页面中没有向外跳转和挖矿代码，可以看做一个隔离的沙盒，所以可以放心使用iframe嵌入。

* **抽离组件**：如果对性能有所要求，觉得iframe造成了性能瓶颈，那么看一下源码也许是个不错的选择？为了方便有这个意向的童鞋快速找到想要的部分，在这里列出了这个项目中最核心的两个部分，希望能有助于快速定位：
    * 深度学习模型(TensorFlow.js 模型)，在[这里](https://github.com/syt123450/ycy-detection-3d/tree/master/public/assets/model)
    * 可视化模型(TensorSpace 模型)，在[这里](https://github.com/syt123450/ycy-detection-3d/blob/master/src/components/Model.js)

### 关于本地运行

* **第一步**： clone 项目
```bash
git clone https://github.com/syt123450/ycy-detection-3d.git
```

* **第二步**：安装依赖，确保已预先安装了`yarn`
```bash
yarn
```

* **第三步**：本地启动程序
```bash
yarn start
```

* **第四步**：浏览器中输入`http://localhost:3000`，通过 3000 端口查看

## <div id="last">写在最后</div>

* 抛砖引玉，期待有更多有趣的项目。
* 如果有有趣的想法，欢迎在 issue 中提出讨论。
* 如果在代码或文档中有不足的地方，欢迎PR。
