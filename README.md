# lesson_weapp
> 您可以通过微信小程序搜索课堂一键通或者扫码访问

![小程序码](https://github.com/vampirebitter/lesson_weapp/blob/master/gh_824c2f54abbf_344.jpg)

## 基本功能

论文及系统设计主要内容为基于微信小程序，一个能记笔记，建立每日任务，课堂签到，意见反馈，作业布置功能的平台，完成以下的开发功能:

1.TodoList，每日任务定制，学生通过建立每日任务来合理规划上课安排。

2.记笔记，通过拍照的方式实现记笔记的功能。

3.签到，学生签到功能。

4.提问反馈，对于老师所讲进行反馈评论，方便老师手机学生反馈。

5.作业记录，记录作业信息。

6.课表功能，学生查看的课表。


-------

## 具体架构

### 小程序客户端+JS中间层

### PHP后端提供API
使用Laravel完成,[API](https://github.com/vampirebitter/weapp_lesson_backend)
您若需要clone到本地请参照laravel的配置方法

### CMS老师的后台管理系统
使用Laravel-admin后台管理系统完成,[cms](https://github.com/vampirebitter/weapp_lesson_cms)
您可以通过[项目地址](https://cms.vampirebitter.top)来进行访问
您若需要clone到本地请参照laravel的配置方法

### 爬取课程表
[timeTable](https://github.com/vampirebitter/timetable)

------

## 提示

**此项目仅做参考**，因为是很短时间做出来的残次品，无论是代码逻辑，还是代码风格，或是页面布局，亦或是完整度都是不够的，只是实现了功能！！


## LICENSE
MIT
