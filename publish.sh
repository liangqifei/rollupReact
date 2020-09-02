#!/usr/bin/env bash
npm config get registry 
npm config set registry=https://registry.npmjs.org
npm login
echo '---------publishing--------'
npm publish

echo '---------publishing end--------'
exit

# npm config set registry=https://registry.npm.taobao.org

