// 通过 mode 接口拿到 src/components 下的所有文件夹名作为打包后的模块
const fs = require('fs');
const path = require('path');
const componentDir = 'src/component';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
let cModuleMap={}
cModuleNames.forEach((name, index) => {
  // console.log(prev, name, `${componentDir}/${name}/index.js`)
  // prev[name] = `${componentDir}/${name}/index.js`;
  let key = `component/${name}/index`
  cModuleMap[key] = `${componentDir}/${name}/index.js`
})
export default cModuleMap;
