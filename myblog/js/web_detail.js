new Vue({
  el: '#new_detail',
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
    crumbs : [
        {
            name : '首页',
            new_tab : '../home/index.html',
        },
        {
            name : 'WEB前端',
            new_tab : '../web/web.html',
        },
        {
            name : 'WEB详情',
            new_tab : '../web/web_detail.html',
        }
    ],
    detail : [
        {
            title : 'WEB前端的发展路程',
            release_time : '发布时间',
            time: '2017.1.1',
            tail : [
                {
                    img : '../../imgs/web1.jpg',
                    info : '以北京上海广州深圳以及后起之秀杭州为例，分析近几年来java，php，web前端以及.net工程师的就业趋势。虽然薪资有浮动变化，所有的职业都是呈上升趋势。这也就不难看出前面为什么互联网行业成为就业最被看好的职业了！ Web前端的岗位职责是利用(X)HTML、CSS、Java、DOM、Flash等各种Web技能结合产品的界面开发。制作标准化纯手工代码，并增加交互功能，开拓Java和Flash模块，同时结合后端开拓技能仿照全部效果，结束丰富互联网的Web开拓，致力于经过进程技能改进用户体验。',
                }
            ],
            
        }
    ]
  }
})