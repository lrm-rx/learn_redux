const path = require('path')
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const OpenBrowserPlugin = require('open-browser-webpack4-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SpeedMeasuerPlugin = require('speed-measure-webpack-plugin')
const webpackConfigBase = require('./webpack.base.config')
const mockMiddleware = require('./mock.config')

const smp = new SpeedMeasuerPlugin()

const PORT = 8080
const webpackConfigDev = {
  mode: 'development',
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热更新
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'React App',
      filename: 'index.html',
      template: path.join(__dirname, '../src/index.html')
    }),
    new OpenBrowserPlugin({
      url: `http://localhost:${PORT}`
    })
  ],
  devtool: 'eval-source-map',
  devServer: {
    // open: true,
    // historyApiFallback: false,
    hot: true,
    host: '0.0.0.0',
    port: PORT,
    proxy:{
      '/api':{//表示拦截以/api开头的请求路径
        target:'http://localhost:3001', // 项目真实的后端地址 
        // target:'http://api.lkblog.net/ws/api.php', // 项目真实的后端地址 
        changOrigin: true,//是否开启跨域
        pathRewrite:{
          '^/api':'' //重写api，把api变成空字符，因为我们真正请求的路径是没有api的
        }
      }
    },
    // contentBase: path.join(__dirname, '../src'),
    // before(app) {
    //   const projectDir = path.resolve();
    //   const mockDir = './mock';
    //   app.use(mockMiddleware({ projectDir, mockDir }));
    // },
  }
}

// module.exports = merge(webpackConfigBase, webpackConfigDev)
module.exports = smp.wrap(merge(webpackConfigBase, webpackConfigDev))
