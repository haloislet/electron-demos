<img src="build/icon.png" align="right" width="200" heigh="auto">

# electron 基础示例
![GitHub release](https://img.shields.io/github/release/haloislet/electron-demos.svg?style=popout) ![GitHub last commit](https://img.shields.io/github/last-commit/haloislet/electron-demos.svg?style=popout) ![GitHub Release Date](https://img.shields.io/github/release-date/haloislet/electron-demos.svg?style=popout)

> electron-demos 包含 electron 基本开发环境和一些常用功能极简示例

<br>

## 使用
下载安装
```bash
$ git clone https://github.com/haloislet/electron-demos.git
$ cd electron-demos
yarn
```

启动开发环境
```bash
$ npm start
```

打包
```bash
$ npm run build
```

发包到 github
```
$ npm run build -- -p always
```

<br>

## 待办事项
- [x] 添加常用开发包
- [x] 区分开发环境和打包环境
- [x] 配置 electron-builder 
- [x] 自动更新
- [x] 从 http 服务器更新软件
- [x] 从 github release 更新软件
- [x] 生成自签名 pfx
- [x] 使用 pfx 签发软件
- [ ] 隔离测试包和正式包配置
- [x] 搭建 electron-release-server
- [ ] ci
- [ ] docker 开发打包 win app
- [ ] 增量更新
