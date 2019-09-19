# 这是一个牛逼的项目

* 新建文件  
  * .gitignore 忽略的文件 node_modules .idea是webstorm的配置文件 .vscode是vscode的配置文件  .git是git的配置文件 但是注意 dist不需要忽略 应该上传  
  * README.md 用来干啥不用多说
  * 拷贝一个LICENSE文件 各种开源政策后边了解

* 使用git的过程中 还是以上手为主 只看是不行的 git init   git add .     git status    git commit -m ""  
* 在github上新建一个仓库 然后按照提示 生成自己的仓库地址 然后连接本地项目和远端的github项目仓库  公钥已经生成并添加  此时 只需要 git remote add origin http……  至此 本地项目和远端仓库就已经产生连接 以后每次使用 git push -u origin master就可以推送到github仓库
* 本地的git工具 可以试想 git add commit push功能 是可视化的 比较方便  
  * 只要有修改 就会在git中看到有修改的文件 熟悉使用 可以逐一add  也可以点击对勾 直接都commit了 然后 有一个推动功能 直接推到github

* 注意 购物车图表是扩展的图表 需要单独拷贝css 和 font文件  引入这个css后 需要在app.vue相应的标签中添加类 基类mui-icon不要去掉 在后边添加就可以
