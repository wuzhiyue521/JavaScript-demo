/**
 * 1. 开发环境: git 常用命令
 */

/**
 * 1. git 就是做我们的代码版本管理
 *
 * 2. 正式项目都需要代码版本管理 。
 *
 * 3. 大型项目需要多人协作开发 。
 *    1. 多人协作, 代码的合并就需要 git 来做。
 *
 * 4. git 和 linux 是一个作者 。
 *
 */

/**
 * 1. 网络 git 服务器: 国内 -> coding.net;  国际 -> github.com
 *
 * 2. 一般公司的代码非开源, 都有自己的 git 服务器 。
 *
 * 3. 搭建 git 服务器无需我们了解太多 。
 *
 * 4. git 的基本操作必须熟练 。
 */

/**
 * 1. 常用的 git 命令:
 *
 * 1. git add .
 * 2. git checkout 文件名 // 发现代码修改错误, 还原代码 。
 * 3. git status // 查看改动文件 。
 * 4. git commit -m "备注" // 把我们修改的代码, 提交到我们本地仓库 。
 * 5. git push origin master // 提交到我们远程仓库 。
 * 6. git pull origin master // 拉取仓库当前代码(其他人提交的代码)。
 *
 * 多人协作:
 *
 * 7. git branch // 分支(看当前的分支)
 * 8. git checkout -b xxx (新建一个分支) / git checkout xxx (切换到已有的分支)
 * 9. git merge xxx // 切换分支之后, 我们将 新建的分支上的内容拷贝过来 。
 */

/**
 * 1. mkdir 文件名。
 * 2. git init 地址 : 先创建文件夹, 然后 git init （在内部会生成.git文件夹）。
 * 3. git --version 查看 git 版本。
 * 4. each "# js-git-test" >> REAMD.md // 将 # js-git-test 塞入 REAMD.md。
 * 5. cat 文件名 : 查看文件内容。
 * 6. git status // 查看改动的文件。
 * 7. git commit -m "备注" // 把我们修改的代码, 提交到我们本地仓库 。
 * 8. git remote add origin SSH(地址)
 * 9. git push -u origin master
 * 7. git diff // 只查看修改的文件的具体修改内容 。
 * 8. git branch // 查看分支
 * 9. git checkout -b dev(新建自己的分支) // 新建分支, 提交自己的功能代码。
 * 9. git push origin dev(新分支) // 将我们新的分支 dev 推送达到 git 上。
 * 10. git checkout master(已有分支(正式的上线主分支)) // 切换到已有分支 。
 * 11. git pull origin master // 提交代码之前需要先拉取一下仓库里的其他人的代码 。
 * 12. git merge dev(自己新建的分支) // 将我们自己的分支代码 dev 合并到主分支上 master
 * 13. git push origin master(主分支) // 这样提交代码之后, 我们合并之后的代码才会真正的提交到我们的仓库 。
 */