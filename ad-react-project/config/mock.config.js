const fs = require('fs')
const path = require('path')

function response(res, content, type = 'json') {
  res.type(type)
  res.write(content)
  res.end()
}

function mock(res, file) {
  fs.readFile(file, 'utf-8', (error, content) => {
    if (error) {
      response(res, error.message, 'html')
      return
    }
    response(res, content)
  })
}

const mockMiddleware = (config) => (req, res, next) => {
  const { projectDir, mockDir } = config
  const filePath = path.resolve(projectDir, `./${mockDir + req.path}.json`)
  // 检查当前文件是否为有效的文件
  return fs.stat(filePath, (error) => {
    if (error) {
      next()
    } else {
      // 返回mock数据的核心方法
      mock(res, filePath)
    }
  })
}

module.exports = mockMiddleware