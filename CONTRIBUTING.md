# 如何向 Unblock Youku 开源项目做出贡献？

非常感谢您的兴趣和支持！只有大家的支持和贡献才能使 Unblock Youku 项目长久地免费稳定地服务海外千千万万的朋友们。

这个页面包含一些在技术上给 Unblock Youku 贡献的办法。也欢迎捐款来支持我们服务器的开销，[捐款请前往 Unblock Youku 主页 ](https://www.uku.im/index_zhs.html)。

### 我在使用 Unblock Youku 时遇到了问题

如果在使用 Unblock Youku 时发现问题（例如在某些网站上不能正常工作），欢迎来向我们寻求帮助。及时的信息反馈也能帮更多的朋友解决类似的问题。

1. [首先查看我们的常见问题解答 FAQ](https://uku.im/faq)，看问题是否能用 FAQ 里提到的方法解决。
2. [如果 FAQ 的方法没能解决您的问题，欢迎去我们的论坛进行反馈](https://uku.im/feedback)。反馈前请查看最近有没有别人遇到了类似的问题，以及他们的解决办法是什么。反馈时请尽量详细地按照模板填写信息（例如遇到问题的网址、使用的软件、还有您所在的地区），更多的信息才能让我们更及时的帮您解决问题。

### 我想提出新的功能或改进

欢迎为我们的开源项目提出意见和改进的办法，我们的开源项目的前进离不开你的帮助。

建议或意见可以 [提交至 GitHub](https://github.com/Unblocker/Unblock-Youku/issues) 或 [直接向我发邮件](https://zhuzhu.org/)。

### 我想利用我的技术特长来提供帮助

程序员拯救世界！:smile: 

让我们的技术能第一时间服务到千千万万的海外友人，是一件非常有成就感的事情！参加开源项目的开发和维护也是一个锻炼和展现自己技术实力的机会。

##### 帮助用户解决问题，第一时间获取用户反馈

[我们的论坛](https://uku.im/feedback)经常会收到各种各样的用户反馈，常见的例如 Unblock Youku 在某个网站上突然失效。时常阅读这些用户反馈使我们能及时了解用户需求并解决问题。

1. 如果用户提供的信息不全，可以尝试询问更多的信息。
2. 测试用户提供的信息，例如测试用户提供的视频网址，看能否重现用户所述的问题。
    * 如果问题不能重现：可以给用户提供简单的解决方法，例如 [FAQ](https://uku.im/faq) 中的办法，看能不能解决问题。
    * 如果问题可以重现：请帮忙在 GitHub 上创建个 issue 从技术角度重述此问题，也方便在 GitHub 管理和追踪问题。

##### 帮助修复问题，添加新的功能和改进

可以关注 [我们的 GitHub Issue 列表](https://github.com/Unblocker/Unblock-Youku/issues)，查看现有的尚待解决的问题。也欢迎提出新的想法来改进我们的开源项目。

整个 Unblock Youku 的项目主要有下面几个组成部分：

1. Chrome extension: 由 JavaScript 写成，代码主要在 `chrome/` 和 `shared/` 两个文件夹下
2. 普通模式的代理服务器：这个是运行开源的 Squid 系统，我们只需改动配置文件。具体的配置和安装可见 [Wiki 页面](https://uku.im/squid)
3. 转发模式的服务器程序：由 JavaScript/Node.js 写成，代码主要在 `server/` 和 `shared/` 两个文件夹下

(更加详细的项目结构描述正在准备中...）

##### Chrome extension 开发的技术知识准备

虽说我们的开源项目主要由 JavaScript 写成，但是只需要非常简单的 JavaScript 知识。如果之前没有 JavaScript 经验但是想学习，推荐 [JavaScript: The Good Parts](http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/)，书很薄只有 176 页。

Chrome extension 的开发可以阅读 [Google 官方的开发教程](https://developer.chrome.com/extensions)。只需要在 Chrome 里打开 `chrome://extensions`页面勾选上 `Developer mode`，就可以手动加载 Unblock Youku 的源码进行开发。

# How to contribute to Unblock Youku?

Thank you very much for your interest and support! Only with the support and contribution of everyone can the Unblock Youku project serve thousands of users for free and for a long time.

This page contains some technical contributions to Unblock Youku. Donations are also welcome to support the cost of our servers, [donate to the Unblock Youku homepage] (https://www.uku.im/index_zhs.html).

### I am having trouble using Unblock Youku

If you find a problem while using Unblock Youku (for example, it doesn't work on some websites), please come and ask for help. Timely feedback can also help more friends solve similar problems.

1. [First check our Frequently Asked Questions(FAQ)] (https://uku.im/faq) to see if the problem can be solved with the methods mentioned in the FAQ.
2. [If the FAQ method does not solve your problem, please go to our forum for feedback] (https://uku.im/feedback). Please check before asking a question whether someone else has encountered similar problems and what their solutions were. Please use the template as much as possible to fill in the information (such as the URL of the problem, the software used, and your region). More information will help us solve the problem in a timely manner.

### I want to propose new features or improvements

We welcome comments and improvements for our open source projects. Our open source projects are inseparable from your help.

Suggestions or comments can be submitted to [GitHub] (https://github.com/Unblocker/Unblock-Youku/issues) or [Sent to me directly] (https://zhuzhu.org/).

### I want to use my technical expertise to help

The programmer saves the world! :smile:

It is a very fulfilling thing to let our technology serve thousands of users in the first place! Participating in the development and maintenance of open source projects is also an opportunity to exercise and demonstrate your technical strength. All technical contributions are welcome!

##### Help users solve problems and get user feedback in the first time

[Our Forum] (https://uku.im/feedback) often receives a variety of user questions or problems, such as: "Unblock Youku suddenly fails on a website". Reading these user questions from time to time allows us to keep abreast of user needs and solve problems.

1. If the information provided by the user is incomplete, you can try to ask for more information.
2. Test the information provided by the user, such as testing the video URL provided by the user to see if the problem described by the user can be reproduced.
    * If the problem cannot be reproduced: you can provide the user with a simple solution, such as the method in [FAQ] (https://uku.im/faq), to see if it can solve the problem.
    * If the issue can be reproduced: please help create an issue on GitHub to retell this issue from a technical perspective and to manage and track issues on GitHub.

##### Help fix problems, add new features and improvements

You can follow [Our GitHub Issue List] (https://github.com/Unblocker/Unblock-Youku/issues) to see existing issues that remain to be resolved. New ideas are also welcome to improve our open source projects.

The entire Unblock Youku project has the following components:

1. Chrome extension: written in JavaScript, the code is mainly in the two folders `chrome/` and `shared/`
2. Normal mode proxy server: This is the Squid system running open source, we only need to change the configuration file. Specific configuration and installation visible [Wiki page] (https://uku.im/squid)
3. Forwarding mode server program: written in JavaScript/Node.js, the code is mainly in the two folders `server/` and `shared/`

(A more detailed description of the project structure is being prepared...)

##### Technical knowledge preparation for Chrome extension development

Although our open source project is primarily written in JavaScript, it only requires very simple JavaScript knowledge. If you don't have JavaScript experience already but want to learn, we recommend [JavaScript: The Good Parts] (http://www.amazon.com/JavaScript-Good-Parts-Douglas-Crockford/dp/0596517742/), which is only 176 pages .

The development of the Chrome extension can be read [Google's official development tutorial] (https://developer.chrome.com/extensions). Just open the `chrome://extensions` page in Chrome and check `Developer mode` to manually load the source code of Unblock Youku for development.