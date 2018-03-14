new Vue({
  el: '#blog',
  data: {
    news : [
           	{
            name : '首页',
            new_tab : '../home/index.html',
            fa : 'fa fa-home'
        },
        {
            name : '最新新闻',
            new_tab : '../new/new.html',
            fa : 'fa fa-podcast'
        },
        {
            name : '技术宅',
            new_tab : '../technology/technology.html',
            fa : 'fa fa-universal-access'
        },
        {
            name : 'WEB前端',
            new_tab : '../web/web.html',
            fa : 'fa fa fa-desktop'
        },
        {
            name : '后端',
            new_tab : '../backend/back.html',
            fa :'fa fa-database'
        },
        {
            name : '服务器',
            new_tab : '../server/server.html',
            fa : 'fa fa-cloud-upload'
        },
        {
            name : '科技新闻',
            new_tab : '../science/science.html',
            fa : 'fa fa-commenting-o'
        },
        {
            name : '书山有路',
            new_tab : '../book/book.html',
            fa : 'fa fa fa-book'
        },
        {
            name : '其他',
            new_tab : '../other/other.html',
            fa : 'fa fa-user-secret'
        }
    ],
    hade_img : '../../imgs/psu.jpg',
    my_details : [
    	{
    		describe : '毕业院校',
            details : '北京交通大学海滨学院',
    	},
    	{
    		describe : '专业名称',
            details : '计算机软件工程专业',
    	},
    	{
    		describe : '毕业日期',
            details : '2017年6月20日',
    	},
    	{
    		describe : '工作地点',
            details : '北京、海淀',
    	},
    	{
    		describe : '职位名称',
            details : 'Web前端中级工程师',
    	},
    	{
    		describe : '就任公司',
            details : '暂时保密',
    	}
    ],
    job_express : '项目经历',
    express : [
	    {
	    	id : '23',
	    	name : 'jquery 前端评论插件模板',
	    	time1 : '2018-03-07',
	    	time2 : '2018-03-07',
	    	details : '使用jquery/bootstrap等,实现实时评论信息展示.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/comments/view/index.html',
	    },
	    {
	    	id : '22',
	    	name : 'angular 购物车列表',
	    	time1 : '2018-03-03',
	    	time2 : '2018-03-05',
	    	details : '使用angular/jquery/bootstrap等,实现前端购物车功能.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/angular/index.html',
	    }, 
	    {
	    	id : '21',
	    	name : 'VUE 后台管理',
	    	time1 : '2018-02-25',
	    	time2 : '2018-03-02',
	    	details : '使用vue/jquery/bootstrap等,实现前端功能模块的静态页面展示以及部分前端交互编写，适应手机端、平板、电脑.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/VUE-UI/view/home/index.html',
	    }, 
	    {
	    	id : '20',
	    	name : '前端分页以及条件查询等',
	    	time1 : '2018-01-29',
	    	time2 : '2018-01-29',
	    	details : '使用jquery/bootstrap等,实现前端分页效果,查询信息展示,批量删除、全选、下拉框查询以及展示当前使用的系统类型等前端业务逻辑处理.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/select_query_page/view/index.html',
	    }, 
	    {
	    	id : '19',
	    	name : '技术博客(私人后台)',
	    	time1 : '2018-01-01',
	    	time2 : '2018-01-30',
	    	details : '使用vue/jquery/bootstrap/echarts等,把自己工作一年多的实际使用的技术以及自学的技术,完成一个属于自己的博客网站的后台的前端页面的布局设计以及交互设计的业务逻辑等.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/blog_back/myblog/login.html',
	    },{
	    	id : '18',
	    	name : '技术博客(私人前端)',
	    	time1 : '2018-01-01',
	    	time2 : '2018-01-30',
	    	details : '使用vue/jquery/bootstrap/echarts等,把自己工作一年多的实际使用的技术以及自学的技术,完成一个属于自己的博客网站的前端整个前端的布局设计以及前端的交互设计等,适应手机端、平板、电脑灯的屏幕.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/blog/blog/view/home/index.html',
	    },{
	    	id : '17',
	    	name : '网页版简历(私人)',
	    	time1 : '2018-01-01',
	    	time2 : '2018-01-03',
	    	details : '使用vue/jquery/bootstrap等,设计了一版个人简历.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/resume/my_resume/view/resume.html',
	    },{
	    	id : '16',
	    	name : '倒计时特效(借鉴)',
	    	time1 : '2017-01-05',
	    	time2 : '2017-01-08',
	    	details : '使用jquery/bootstrap等,倒计时特效.',
	    	load : '查看路径',
	    	url : 'http://daisyhawen.github.io/html5-canvas-clock/index.html',
	    },
	     {
	     	id : '15',
	    	name : '订单系统(企业级)',
	    	time1 : '2017-10-01',
	    	time2 : '2018-12-31',
	    	details : '使用jquery/bootstrap/echarts/ajax/json等,完成下单系统的用户界面布局以及前端交互逻辑以及数据的调试以及系统的测试以及维护.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/order_webApp/view/home/home.html',
	    },
	     {
	     	id : '14',
	    	name : '工厂生产系统(企业级)',
	    	time1 : '2017-12-10',
	    	time2 : '2018-04-30',
	    	details : '使用jquery/bootstrap/jsp/java等,完成生产系统的页面布局以及前端交互逻辑以及数据的调试以及系统的测试以及维护.',
	    	load : '查看路径',
	    	url : '暂无',
	    },
	     {
	     	id : '13',
	    	name : '企业终端管理系统(毕设)',
	    	time1 : '2017-02-01',
	    	time2 : '2017-06-30',
	    	details : '使用jquery/bootstrap/php/mysql等,完成企业终端管理系统全站开发以及维护.',
	    	load : '查看路径',
	    	url : '暂无',
	    },
	     {
	     	id : '12',
	    	name : '工控网络集中管理平台(商业级)',
	    	time1 : '2016-12-01',
	    	time2 : '2017-03-30',
	    	details : '使用jquery/bootstrap/mysql/echarts/ztree.js等,工控网络集中管理平台布局修正以及功能的调整.',
	    	load : '查看路径',
	    	url : '暂无',
	    },
	     {
	     	id : '11',
	    	name : '工控卫士(商业级)',
	    	time1 : '2016-10-01',
	    	time2 : '2017-01-30',
	    	details : '使用jquery/bootstrap/angular/echarts/ztree.js/go.js等,工控卫士的页面布局以及js的业务逻辑编写、与后台工程师联调数据.',
	    	load : '查看路径',
	    	url : '暂无',
	    },{
	    	id : '10',
	    	name : '日历（借鉴）',
	    	time1 : '2016-09-01',
	    	time2 : '2016-09-05',
	    	details : '使用jquery/bootstrap实现日历设计.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/calendar/daly/calendar/index.html',
	    },{
	    	id : '9',
	    	name : '日历（借鉴）',
	    	time1 : '2016-09-01',
	    	time2 : '2016-09-05',
	    	time : '2016.9~2016.10',
	    	details : '使用jquery/bootstrap实现日历设计.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/calendar/daly/jQuery-calendar/index.html ',
	    },{
	    	id : '8',
	    	name : '气候（借鉴）',
	    	time1 : '2016-09-01',
	    	time2 : '2016-09-05',
	    	details : '使用jquery/bootstrap实现气候设计.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/calendar/气候/index.html',
	    },
	     {
	     	id : '7',
	    	name : '官网设计',
	    	time1 : '2016-08-01',
	    	time2 : '2016-08-20',
	    	details : '使用jquery/bootstrap实现官网设计.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/bootstrap-web/bootstrap/index.html',
	    },
	     {
	     	id : '6',
	    	name : 'canvas星星(借鉴)',
	    	time1 : '2016-07-01',
	    	time2 : '2016-07-10',
	    	details : '使用canvas,canvas星星展示.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/Stars-in-the-night-sky/html5-canvas-stars-master/star.html',
	    },
	     {
	     	id : '5',
	    	name : '官网布局(借鉴)',
	    	time1 : '2016-06-01',
	    	time2 : '2016-06-25',
	    	details : '使用jquery/bootstrap/等,完成官网布局特效.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/website/index.html',
	    },
	     {
	     	id : '4',
	    	name : '在线商城(校园级)',
	    	time1 : '2016-05-01',
	    	time2 : '2016-06-01',
	    	details : '使用jquery/bootstrap/php/mysql等,完成在线商城的全站开发.',
	    	load : '查看路径',
	    	url : '暂无',
	    },
	     {
	     	id : '3',
	    	name : '音乐播放器(个人)',
	    	time1 : '2016-02-01',
	    	time2 : '2016-03-01',
	    	details : '使用jquery/bootstrap等,音乐播放器页面设计以及播放功能.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/music/HTML5MusicPlayer/index.html',
	    },
	     {
	     	id : '2',
	    	name : 'CMS内容管理系统(个人)',
	    	time1 : '2015-10-01',
	    	time2 : '2016-03-01',
	    	details : '使用jquery/bootstrap/javascript/php/mysql等,CMS内容管理系统全站开发.',
	    	load : '查看路径',
	    	url : 'https://eight1302.github.io/cms',
	    },
	     {
	     	id : '1',
	    	name : '在线留言系统(个人)',
	    	time1 : '2015-05-01',
	    	time2 : '2015-10-01',
	    	details : '使用jquery/bootstrap/javascript/php/mysql等,在线留言系统全站开发.',
	    	load : '查看路径',
	    	url : '暂无',
	    }
    ],
  }
})
