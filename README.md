# 利用vscode remote搭建远程VUE前端开发环境
## 目的
让性能较低的电脑能够有较好的开发体验，使用windows的同学能在Linux环境下开发
## 环境版本
#### 本地电脑：
1. vscode => 1.45.0
2. Remote - SSH => 0.51.0
3. Debugger for Chrome => 4.12.6
4. Vetur => 0.24.0
#### 服务器：
1. ubuntu => 20.04 LTS
1. nodejs => v14.2.0
2. @vue/cli => 4.3.1

## 步骤
1. 用 vue cli 创建项目
2. 安装vscode插件 remote - ssh, Debugger for Chrome, Vetur
3. 通过remote - ssh创建并链接远程vscode工作空间
4. 新建vue.config.js添加sourcemap配置和修改devServer的host，port。（修改host为localhost的目的是livereload的地址可能是服务器内部ip地址，本地的电脑上可能访问不了这个地址）
5. 跑项目，npm run serve
6. 在remote-ssh插件的tab下forward一个服务器的端口到本地电脑，这样就可以在本地浏览器访问测试页面(要默认forward某个端口可以在remote-ssh的配置下加上LocalForward 127.0.0.1:8080 127.0.0.1:8080)
7. 在vscode里打断点，按照[官方教程](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)来配置即可。

## 参考
[vscode remote - ssh 文档](https://code.visualstudio.com/docs/remote/ssh#_opening-a-terminal-on-a-remote-host)  
[vue 文档](https://cn.vuejs.org/v2/cookbook/debugging-in-vscode.html)
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
