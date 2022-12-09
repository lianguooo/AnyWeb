import{_ as s}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a as e,b as n,d as o,e as t,r as i}from"./app.d17d0724.js";const r={},d=t('<blockquote><p>发现问题，解决问题，提出问题</p></blockquote><a href="mailto:lianguooo@gmail.com"><img src="http://tc.seoipo.com/2022-12-04-11-58-19.svg" alt="Mail"></a><h2 id="🧱-笔记结构" tabindex="-1"><a class="header-anchor" href="#🧱-笔记结构" aria-hidden="true">#</a> 🧱 笔记结构</h2><ul><li>开发环境：常用的环境配置；</li><li>代码：常用代码的学习使用笔记；</li><li>软件应用：常用应用、Chrome 扩展及相关教程；</li><li>页面开发：页面插件和框架生成工具；</li><li>网站部署：网站相关的平台、工具及知识收集；</li><li>Linux 服务：NAS 和服务器上的后端应用，主要以 Docker 方式部署；</li><li>系统问题：Windows 系统优化和相关问题；</li><li>生活区：说明书，生活记录及小技巧；</li><li>博客区：聚合所有博客文章，并以分类、标签、时间轴等方式进行组合。</li></ul><h2 id="🍥-搭建" tabindex="-1"><a class="header-anchor" href="#🍥-搭建" aria-hidden="true">#</a> 🍥 搭建</h2>',5),p={href:"https://github.com/lianguooo/lianguooo.github.io",target:"_blank",rel:"noopener noreferrer"},u=t('<p><img src="http://tc.seoipo.com/2022-08-10-19-32-05.png" alt="" loading="lazy"><img src="http://tc.seoipo.com/2022-08-10-19-34-13.png?imageMogr2/thumbnail/!60p" alt="" loading="lazy"></p><ul><li>复制好后，GitHub 会自动搭建网站，架构时间约 3 分钟。</li></ul><ol start="2"><li>点击 <code>Setting</code>, 修改 <code>Repository name</code> 为 <code>xxx.github.io</code>, <code>xxx</code> 是你的 GitHub 用户名。如果该项名称已被占据，GitHub Pages 无法正常显示，则查看页面底部的常见问题。</li></ol><p><img src="http://tc.seoipo.com/20180505202201.png" alt="" loading="lazy"></p><ol><li><p>同一页面选择「Code and automation」&gt;「Pages」&gt;「Build and deployment」&gt;「Branch」, 将 gh-page branch 设为 GitHub Pages 来源，网站运行目录默认为 <code>/(root)</code>。设置好后，点击「Save」。</p><p><img src="http://tc.seoipo.com/2022-08-10-19-39-15.png" alt="" loading="lazy"></p></li><li><p>设置成功后，页面会提示访问链接 <code>https://xxx.github.io/</code>，知识库搭建完毕。</p></li></ol><h2 id="🔣-配置-learndata" tabindex="-1"><a class="header-anchor" href="#🔣-配置-learndata" aria-hidden="true">#</a> 🔣 配置 LearnData</h2><h3 id="配置路径" tabindex="-1"><a class="header-anchor" href="#配置路径" aria-hidden="true">#</a> 配置路径</h3><p>LearnData 的文章页面配置查看主目录下的 <code>samplepage.md</code>，文本保存路径和网站配置在 <code>docs</code> 文件夹。</p><p><code>docs/.vuepress</code> 存放网站配置文件。<code>docs/_post</code> 存放博客文章。<code>docs/_temp</code> 默认不同步到 GitHub，需手动在本地建立 <code>_temp</code> 文件夹，用来存放草稿。你可以按范围或功能来新建文件夹存放笔记。</p><p><code>docs/README.md</code> 是默认主页，<code>docs/blog.md</code> 配置博客页面，<code>docs/intro.md</code> 是你的个人介绍。</p><p><figure><img src="http://tc.seoipo.com/2022-08-22-18-04-08.png" alt="" title="docs 路径结构" loading="lazy"><figcaption>docs 路径结构</figcaption></figure></p><h3 id="配置文件" tabindex="-1"><a class="header-anchor" href="#配置文件" aria-hidden="true">#</a> 配置文件</h3>',12),h=e("code",null,"docs/.vuepress",-1),m={href:"https://github.com/vuepress-theme-hope/vuepress-theme-hope/tree/main/docs/theme/src/.vuepress",target:"_blank",rel:"noopener noreferrer"},_=e("li",null,[e("code",null,"config.ts"),n(" 配置网站环境依赖和网站属性。")],-1),g=e("li",null,[e("code",null,"sidebar.ts"),n(" 配置侧边栏，替换文档中文件夹路径即可，后台自动抓取路径下的 md 文件来生成侧边栏。")],-1),b=e("li",null,[e("code",null,"navbar.ts"),n(" 配置导航栏，推荐放你常用的文档链接。")],-1),k=e("code",null,"theme.ts",-1),f={href:"https://newzone.top/web/Comments.html",target:"_blank",rel:"noopener noreferrer"},v=e("li",null,[e("code",null,"templateBuild.html"),n(" 是网页模板，调整网站关键词和第三方统计代码。")],-1),y=t('<p>注意：LearnData 默认使用了 algolia 全文搜索，如果你没设置 Docsearch 爬虫的话，需删除 <code>docs/.vuepress/config.ts</code> 中 plugins 下的 docsearchPlugin 区块。删除后，站点会将页面标题和小标题作为搜索索引。</p><h3 id="本地图片引用" tabindex="-1"><a class="header-anchor" href="#本地图片引用" aria-hidden="true">#</a> 本地图片引用</h3><p>本地图片必须保存在 <code>docs/.vuepress/public</code> 目录中，否则生成静态页面时会报错 <code>Rollup failed to resolve import</code>。</p><p>假设图片名为 1.png，将其保存在 <code>docs/.vuepress/public/imgs</code> 中，则该图片的引用链接为 <code>/imgs/1.png</code>，或使用 Markdown 图片链接 <code>![](/imgs/1.png)</code>。</p><h2 id="🖥️-网站部署" tabindex="-1"><a class="header-anchor" href="#🖥️-网站部署" aria-hidden="true">#</a> 🖥️ 网站部署</h2><p>LearnData 推送到 GitHub 后，会自动生成可访问的网页，但国内访问 GitHub Pages 的速度极不稳定，为了确保网站能被正常访问，建议增加国内的访问节点。</p><p>很多人选择 Gitee Pages 作为国内节点，通过 GitHub Actions 将新文档同步到 Gitee，生成位于国内的静态页面 Gitee Pages。但是，Gitee Pages 的限制非常多，必须实名验证，免费版无法自定义域名，更别提近期的下架风波。因此，我没选 Gitee，而是把文档同步到国内服务器（域名需备案）或 Vercel（国外服务永远不知什么时候会断）。</p><h3 id="同步到服务器" tabindex="-1"><a class="header-anchor" href="#同步到服务器" aria-hidden="true">#</a> 同步到服务器</h3><p>项目搭建好后，出现了红色叉叉，这是 GitHub Actions 同步服务器的失败提示，需按下方操作配置。</p><p>服务器设置：进入 GitHub 仓库「setting」&gt;「Secrets」&gt;「Action」，添加 <code>FTP_HOST</code>、<code>FTP_PORT</code>、<code>FTP_USERNAME</code> 和 <code>FTP_PASSWORD</code> 的密钥。之后，Github Actions 在文件发生变动时，会将修改推送到服务器 FTP。</p>',10),x={href:"https://newzone.top/deploy/Static.html#%E5%90%8C%E6%AD%A5%E5%88%B0-oss",target:"_blank",rel:"noopener noreferrer"},E=e("h3",{id:"部署到-vercel",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#部署到-vercel","aria-hidden":"true"},"#"),n(" 部署到 Vercel")],-1),P=e("p",null,"Vercel 的速度比 GitHub Pages 稳定些，不过「*.vercel.app」域名已经被 DNS 污染，国内使用建议绑定自定义域名。",-1),V=e("p",null,"Vercel 部署步骤如下：",-1),G={href:"https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Frockbenben%2FLearnData%2Ftree%2Fgh-pages",target:"_blank",rel:"noopener noreferrer"},D=e("img",{src:"https://vercel.com/button",alt:"Vercel",loading:"lazy"},null,-1),L=e("code",null,"https://vercel.com/new/clone?repository-url=https://github.com/rockbenben/LearnData/tree/gh-pages",-1),A=e("code",null,"rockbenben/LearnData",-1),F=e("code",null,"你的用户名/仓库名",-1),H=t('<li><p>输入一个你喜欢的 Vercel 项目名称，默认 private 即可，然后点击 <code>Create</code>。</p><p><figure><img src="http://tc.seoipo.com/2022-08-24-17-24-16.png" alt="" title="创建 Vercel 项目" loading="lazy"><figcaption>创建 Vercel 项目</figcaption></figure></p></li><li><p>此时 Vercel 会基于 LearnData 模板帮助你新建并初始化仓库，仓库名为你之前输入的项目名。几十秒后，满屏的烟花会庆祝你部署成功。此时点击 <code>Go to Dashboard</code> 可以跳转到应用的控制台。</p><p><figure><img src="http://tc.seoipo.com/2022-08-24-17-21-58.png" alt="" title="Vercel 部署成功提示" loading="lazy"><figcaption>Vercel 部署成功提示</figcaption></figure></p></li>',2),S=e("p",null,[n("完成前三步后网站部署好了，但此时 Vercel 页面不能对 GitHub Pages 自动同步更新。自动部署前，你需要配置 "),e("code",null,"PERSONAL_TOKEN"),n(" 和 GitHub Actions。")],-1),T={href:"https://github.com/settings/tokens",target:"_blank",rel:"noopener noreferrer"},w=e("li",null,"项目仓库中选择「setting」>「Secrets」>「Action」，新建密钥 PERSONAL_TOKEN，并填入刚复制的 token 值。",-1),N=e("li",null,[n("将下方代码编辑到 "),e("code",null,".github/workflows/main.yml"),n(" 文件底部，注意修改 "),e("code",null,"dst_owner"),n(" 和 "),e("code",null,"dst_repo_name"),n("。")],-1),R=t(`<div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#将页面更新到 Vercel</span>
<span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> Copy file to Vercel
  <span class="token key atrule">if</span><span class="token punctuation">:</span> always()
  <span class="token key atrule">uses</span><span class="token punctuation">:</span> andstor/copycat<span class="token punctuation">-</span>action@v3
  <span class="token key atrule">with</span><span class="token punctuation">:</span>
    <span class="token key atrule">personal_token</span><span class="token punctuation">:</span> $<span class="token punctuation">{</span><span class="token punctuation">{</span> secrets.PERSONAL_TOKEN <span class="token punctuation">}</span><span class="token punctuation">}</span>
    <span class="token key atrule">src_path</span><span class="token punctuation">:</span> /.
    <span class="token key atrule">dst_path</span><span class="token punctuation">:</span> /
    <span class="token comment"># 你的用户名</span>
    <span class="token key atrule">dst_owner</span><span class="token punctuation">:</span> rockbenben
    <span class="token comment"># 与 Vercel 链接的仓库名，也就是 Vercel 部署时新建的仓库</span>
    <span class="token key atrule">dst_repo_name</span><span class="token punctuation">:</span> LearnData<span class="token punctuation">-</span>Vercel
    <span class="token key atrule">dst_branch</span><span class="token punctuation">:</span> main
    <span class="token key atrule">src_branch</span><span class="token punctuation">:</span> gh<span class="token punctuation">-</span>pages
    <span class="token key atrule">clean</span><span class="token punctuation">:</span> <span class="token boolean important">true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),O=t('<h2 id="🤔-常见问题" tabindex="-1"><a class="header-anchor" href="#🤔-常见问题" aria-hidden="true">#</a> 🤔 常见问题</h2><h3 id="网页显示异常" tabindex="-1"><a class="header-anchor" href="#网页显示异常" aria-hidden="true">#</a> 网页显示异常</h3><p>网站只显示文字且不能正常显示网页，这是网站路径不正确而导致的页面样式错误。</p><p>检查 <code>docs/.vuepress/config.ts</code> 中 base 的设置，默认为 <code>/</code>。如果 GitHub Page 提示访问链接 <code>https://xxx.github.io/yyy</code>，则将 base 改为 <code>/yyy</code>。</p><h3 id="err-module" tabindex="-1"><a class="header-anchor" href="#err-module" aria-hidden="true">#</a> ERR_MODULE</h3><p>生成静态网页时，报错 <code>Error [ERR_MODULE_NOT_FOUND]: Cannot find module</code>，检查是否有第三方插件或未正确配置环境依赖。</p><p>这是 pacakge.json 引发的环境依赖报错，默认配置已经固化依赖版本号，该报错出现几率极低，遇到的话请留言到 issue 或评论区。</p><h3 id="同步服务器报错" tabindex="-1"><a class="header-anchor" href="#同步服务器报错" aria-hidden="true">#</a> 同步服务器报错</h3><ul><li><p><code>Error: Input required and not supplied: server</code> 是配置服务器错误的提示，需按上方网站部署步骤配置。如果不需要同步到服务器，建议删除 <code>.github/workflows/main.yml</code> 中 Sync files 区块的代码，避免报错。</p></li><li><p><code>FTPError: 530 Login authentication failed</code> 指 FTP 密码错误或账号不存在，需用 FileZilla 测试 FTP 的有效性。</p></li><li><p><code>Error: Timeout (control socket)</code> 是同步服务器超时报错。如果出现该错误，进入 Actions 页面点击右侧按钮「Re-run all jobs」，重新进行部署。如果错误连续出现，可以尝试关闭防火墙，测试是否 GitHub 服务器被拉黑了。</p></li></ul><h3 id="静态文件名字总变" tabindex="-1"><a class="header-anchor" href="#静态文件名字总变" aria-hidden="true">#</a> 静态文件名字总变</h3><p>VuePress 默认使用 Vite，打包时会引入时间戳和 hash 对文件重命名，导致网站大部分的文件发生更改。即使你并没有更新文章，生成的静态文件也会改变。比如我的笔记网站用的 VuePress 默认配置，每次服务器部署需要 10 分钟，期间打开网站就会出错。</p>',11),z={href:"https://github.com/rockbenben/LearnData/tree/nohashname",target:"_blank",rel:"noopener noreferrer"},C=e("h3",{id:"本地运行-learndata",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#本地运行-learndata","aria-hidden":"true"},"#"),n(" 本地运行 LearnData")],-1),B={href:"https://newzone.top/deploy/VPS.html#%E7%8E%AF%E5%A2%83%E9%83%A8%E7%BD%B2",target:"_blank",rel:"noopener noreferrer"},M=e("li",null,[n("下载 LearnData 项目到本地，在目录下运行终端，输入命令 "),e("code",null,"pnpm i && pnpm up"),n("。")],-1),U=e("li",null,[n("完成前两步后，终端中输入 "),e("code",null,"pnpm docs:dev"),n("，成功即可提示访问链接，默认为 "),e("code",null,"http://localhost:8080/"),n("。")],-1),W=e("p",null,[n("运行本地服务器后，修改文件时预览页面也会同步发生改变。如果想停止本地服务器，在终端中按键 "),e("code",null,"Ctrl + C"),n("。")],-1);function q(I,K){const a=i("ExternalLinkIcon");return l(),c("div",null,[d,e("ol",null,[e("li",null,[n("进入 "),e("a",p,[n("lianguooo"),o(a)]),n(" 项目页，点击「Use this template」，复制模板文件。")])]),u,e("p",null,[h,n(" 路径下是网站的配置文件，我在上面添加了详细的注释。你可以参照注释自由调整配置，或参考 "),e("a",m,[n("vuepress-theme-hope 配置案例"),o(a)]),n("。")]),e("ul",null,[_,g,b,e("li",null,[k,n(" 对主题和插件进行配置，"),e("a",f,[n("评论插件"),o(a)]),n(" 设置亦在此文件。")]),v]),y,e("p",null,[n("如果你不需要同步到服务器 FTP，建议按常见问题中的操作删除对应代码，或者按照 "),e("a",x,[n("GitHub 同步到 oss"),o(a)]),n(" 步骤将网页部署到云存储上。")]),E,P,V,e("ol",null,[e("li",null,[e("p",null,[n("点击 "),e("a",G,[D,o(a)]),n(" 或将 "),L,n(" 中的 "),A,n(" 改为 "),F,n("，然后会跳转至 Vercel 进行网页部署。如果你未登录的话，Vercel 会让你注册或登录，请使用 GitHub 账户进行快捷登录。")])]),H,e("li",null,[S,e("ul",null,[e("li",null,[n("新建 "),e("a",T,[n("Personal access tokens"),o(a)]),n("，勾选权限「repo (Full control of private repositories)」，生成后复制 token 值。")]),w,N]),R])]),O,e("p",null,[n("如果不想每次架构都重命名文件，可以复制「"),e("a",z,[n("nohashname"),o(a)]),n("」branch。我把 nohashname 分支的打包工具换成了 Webpack，并用 chainWebpack 设置文件命名规则，避免文件非必要重命名。")]),C,e("ol",null,[e("li",null,[n("安装环境 npm 和 pnpm，方法查看 "),e("a",B,[n("环境部署教程"),o(a)]),n("。")]),M,U]),W])}const $=s(r,[["render",q],["__file","index.html.vue"]]);export{$ as default};
