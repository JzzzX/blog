# Guinsoo的博客

线上地址：https://jzzzx.github.io/blog/
仓库：https://github.com/JzzzX/blog

Hugo 0.166.0 + Archie。中文导航；桌面正文 18px、手机 17px，行距 1.9。支持中英文界面；默认跟随系统深浅色，右上角可手动切换并记住选择。无评论、统计或第三方字体请求。

## 写文章

1. 在本目录运行 `hugo new content posts/my-first-post.md`。
2. 打开 content/posts/my-first-post.md，填写标题、日期、标签和正文。
3. 运行 `hugo server -D`，在 http://localhost:1313/blog/ 预览。
4. 确认可以公开后，将文章的 `draft: true` 改为 `draft: false`。
5. 保存、提交并推送：

```sh
git add content
git commit -m "Publish new post"
git push
```

GitHub Actions 自动构建和发布。进度见仓库 Actions 页面。
也可以直接在 GitHub 仓库编辑 content/posts 下的 Markdown 文件，提交后自动发布。
仓库是公开的：标记为草稿的文章不会进入网站，但提交到仓库的原文仍然公开。私人草稿请放在仓库之外。

## 调整外观

- 名称、简介、导航：hugo.toml。
- 中文字号、行距、页面宽度：assets/css/reading.css。
- 中文界面模板：layouts/；搜索提示：assets/js/search.js。
- 上游主题：themes/archie，固定为 Git 子模块。自定义修改不直接改上游。

## 构建和恢复

```sh
git clone --recurse-submodules git@github.com:JzzzX/blog.git
cd blog
brew install hugo
hugo --minify
```

public 为构建输出，不提交。content/posts/preview.md 是公开可见的通用排版样稿，仅在本地 `hugo server -D` 时进入网站。

英文文章放在 content.en/posts/，使用与中文相同的文件名即可关联翻译。语言切换优先跳转对应译文，无译文时进入该语言首页。
