new Vue({
  el: '#book',
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
            name : '书山有路',
            new_tab : '../book/book.html',
        },
    ],
    news_title : [
        {
            url : 'https://book.douban.com/subject/25886197/',
            title : '../../imgs/boot.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
            info : '深入理解Bootstrap',
        },
          {
            url : 'https://book.douban.com/subject/20390374/',
             title : '../../imgs/xys.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
             info : '响应式Web设计',
        },{
            url : 'https://book.douban.com/subject/3136781/',
            title : '../../imgs/ajax.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
            info : '深入浅出Ajax',
        },
          {
            url : 'https://book.douban.com/subject/10546125/',
             title : '../../imgs/java.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
            info : 'JavaScript高级程序设计（第3版）',
        },{
            url : 'https://book.douban.com/subject/25733582/',
            title : '../../imgs/jqu.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
            info : 'jQuery基础教程 （第4版）',
        },
          {
            url : 'https://book.douban.com/subject/2175995/',
             title : '../../imgs/css.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
            info : 'CSS网站布局实录（第2版）',
        }
    ]
  }
})