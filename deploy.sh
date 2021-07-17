#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
echo 'docs.jjjgood.com' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:lynnjinjie/docs.git
else
  msg='来自github actions的自动部署'
  githubUrl=https://lynnjinjie:${GITHUB_TOKEN}@github.com/lynnjinjie/docs.git
  git config --global user.name "lynnjinjie"
  git config --global user.email "lynnjinjie@gmail.com"
fi

git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

# 如果你想要部署到 https://USERNAME.github.io
# git push -f git@github.com:lynnjinjie/lynnjinjie.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

cd -
rm -rf docs/.vuepress/dist
