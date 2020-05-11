# 利用vscode remote搭建远程VUE前端开发环境
## 目的
让性能较低的电脑能够有较好的开发体验，使用windows的同学在Linux环境下写代码，定位服务器环境上的问题。
## 环境版本
#### 本地电脑：
1. vscode => 1.45.0
2. Remote - SSH(vscode插件) => 0.51.0
3. Debugger for Chrome => 4.12.6
#### 服务器：
1. nodejs => v14.2.0
2. @vue/cli => 4.3.1

## 步骤
1. 用 vue cli 创建项目
2. 安装vscode 插件 remote - ssh 和 Debugger for Chrome
3. 创建并链接远程vscode工作空间
4. 新建vue.config.js添加sourcemap配置和修改devServer的host，port。（修改host为localhost的目的是livereload的地址可能是服务器内部ip地址，我们本地的电脑上可能访问不了这个地址）
5. 跑项目，npm run serve
6. 在remote-ssh插件的tab下forward一个前端端口到本地电脑，这样就可以在本地浏览器访问测试页面
7. 在vscode里打断点，直接新建一个{}chrome:launch调试配置即可。

## 未解决问题
1. 我的vscode不知道为什么不能在.vue文件下打断点。

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
