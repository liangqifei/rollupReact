// 通过 mode 接口拿到 src/components 下的所有文件夹名作为打包后的模块
const fs = require('fs');
const path = require('path');
const componentDir = 'src/component';
const cModuleNames = fs.readdirSync(path.resolve(componentDir));
let cModuleMapCss = {}
cModuleNames.forEach((name, index) => {
  let key = `component/${name}/index`
  cModuleMapCss[key] = `${componentDir}/${name}/index.less`
})
export default cModuleMapCss;

//SSSS