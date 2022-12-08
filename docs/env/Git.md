#  GIT

## 1、简介

**开源的分布式<font color='red'>版本控制</font>系统，有效、高速地处理从很小到非常大的项目版本管理**

优点

- 适合[分布式开发](https://baike.baidu.com/item/分布式开发)，强调个体
- 公共服务器压力和数据量小
- 速度快、灵活
- 容易解决开发者之间的代码冲突
- 离线工作

缺点

- 不符合常规思维
- 代码保密性差
- 学习周期长

## 2、版本控制

![image-20210110111321903](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110111321903.png)

![image-20210110111404204](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110111641636.png)

![image-20210110111519478](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110111519478.png)

![image-20210110111641636](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110111802303.png)

![image-20210110111802303](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110111404204.png)

![image-20210110111838361](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110111838361.png)

![image-20210110111929644](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110111929644.png)

![image-20210110112107789](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112107789.png)

![image-20210110112125338](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112534131.png)

## 3、GIT历史

![image-20210110112242223](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112901853.png)

![image-20210110112442233](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112816075.png)

## 4、环境配置

![image-20210110112534131](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112654679.png)

![image-20210110112654679](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110113500826.png)

![image-20210110112816075](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110113845226.png)

![image-20210110112901853](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110113915896.png)

![image-20210110112943454](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114225547.png)

```bash
rm -rf / 切勿在linux中尝试，删除电脑全部文件！
```

![image-20210110113500826](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114334329.png)

![image-20210110113845226](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114609949.png)

![image-20210110113915896](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114518103.png)

![image-20210110113617881](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114600123.png)

## 5、基本理论 (核心)

![image-20210110114225547](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114713249.png)

![image-20210110114334329](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114657705.png)

![image-20210110114518103](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114825617.png)

![image-20210110114600123](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110115006739.png)

![image-20210110114609949](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110172338346.png)

![image-20210110114657705](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110114745797.png)

![image-20210110114713249](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110115553177.png)

## 6、项目搭建

![image-20210110114745797](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110115505012.png)

![image-20210110114825617](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110115722394.png)

![image-20210110115006739](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110115659790.png)

![image-20210110172338346](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110145953196.png)

## 7、文件操作

![image-20210110115132337](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110145834124.png)

```bash
# 解除文件跟踪 status: untracked
git restore --staged <file>

# 跟踪后，修改文件。status: modified

# 跟踪，修改，git add . 后。status: staged
# 跟踪，修改，git checkout <file> 后。回退到上次add状态 status: staged

```

![image-20210110115505012](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110145155677.png)

![image-20210110115541935](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110145655574.png)

![image-20210110115553177](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110150959183.png)

![image-20210110115659790](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110151328712.png)

![image-20210110115722394](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110150623853.png)

## 8、使用码云

![image-20210110145155677](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110151240301.png)

![image-20210110145655574](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110151758841.png)

![image-20210110145834124](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110151831816.png)

![image-20210110145953196](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110151357272.png)

## 9、IDEA集成GIT

![image-20210110150646842](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110174056487.png)

![image-20210110150623853](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110151731340.png)

![image-20210110150959183](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112442233.png)

## 10、GIT分支

![image-20210110151328712](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112242223.png)

![image-20210110151240301](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112125338.png)

![image-20210110151357272](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110112943454.png)

![image-20210110151731340](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110113617881.png)

![image-20210110151758841](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110115541935.png)

![image-20210110151831816](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110150646842.png)

## 实际项目搭建记录

```bash
#-------Gitee准备工作-------
1. 在Gitee上新建一个仓库：test_repository
2. 复制仓库地址：https://gitee.com/liang-jianguo/test_repository.git
#-------本地版本管理-------
# 新建项目文件夹
mkdir test_repository
# 进入项目文件夹
cd test_repository
# git初始化
git init
# 添加文件 例：README.md
touch README.md
# add到本地版本库暂存区
git add README.md
# commit到本地版本库           // 修改后，不add,直接commit使用 git commit <file> -a -m "message"
git commit -m "注释"
#-------远程版本管理-------
# 项目添加远程地址(可以在.git/config文件中查看)
git remote add origin https://gitee.com/liang-jianguo/test_repository.git
# 将项目push到远程 (-u: 保存此分支信息，下次直接Git push。origin: 远程地址。master: push的本地分支名)
git push -u origin master
# 第二次push
git push
```

```bash
# 查看commit历史
git log --stat
# 退出查看
q
```


```bash
#---------分支操作: 在分支编写代码，主分支不会受到影响，最后需要合并到主分支---------
# 添加远程dev分支

# 添加本地dev分支
git branch dev
# 切换到dev分支
git checkout dev
# 或者新建dev分支并切换
git branch -b dev
# 在dev分支中add,commit

# 提交到远程dev分支
git push -u origin dev

#-------在master分支中合并dev分支------
# 先切换到master分支
git checkout master
# 合并dev (直接将dev分支内容拷贝到master)
git merge dev

#-------两个分支存在冲突，需要合并------
```

![image-20210110174056487](https://lianguooo-typora.oss-cn-shanghai.aliyuncs.com/image-20210110115132337.png)

#### 查看上次提交版本是否为远程服务器版本

1. 查看本地commit记录

   git log --stat

2. 查看服务器commit记录
3. 将修改得记录回退

#### 停止追踪已提交文件

```bash
 git rm -r --cached src/main/resources/application-dev.yml
```







## 问题解决

### error: remote unpack failed: error Missing tree

问题：本地新建的分支无法推送至远程

原因：本地分支建立后，未立即推送至远程，期间远程状态信息已被修改

解决方法：1. 切换为主分支 -> 2. pull -> 3. 切换分支 -> 4. push

```bash
// 1. 切换到主分支（此时分支 A）
git checkout master

// 2. pull
git pull

// 3. 切换到次分支
git checkout A

// 4. push
git push origin A
```

























































































































































撤销修改
```
// 单一文件（需要进入到文件目录）
git checkout -- [文件名]

// 所有文件
git checkout -- file
```