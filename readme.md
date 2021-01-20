### taro

- 开发pre
  - 脚手架构建项目
  ```
    npm install -g @tarojs/cli
    taro init myTaroApp
    （一大堆配置，为了熟悉ts和mobx，该工程用了这两个）
  ```

  - 项目跑起来
  ```
    cd /path/to/project
    npm run dev:weapp
  ```

  - 了解更多
  ```
    [taro文档官网](https://nervjs.github.io/taro/docs/GETTING-STARTED.html)
  ```

- 开发ing
  - 组件库
  ```
    npm i taro-ui
    [文档地址](https://taro-ui.aotu.io/#/docs)
  ```

- 小坑怡情
  - Taro提供的路由跳转Taro.navigateTo会编译抛错
  - 解决方法：import { navigateTo } from Taro