new Vue({
  el: '#science',
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
            name : '科技新闻',
            new_tab : '../science/science.html',
        },
    ],
    news_title : [
        {
            url : './science_detail.html',
            title : '../../imgs/sky.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
            info : '天空一号',
        },
          {
            url : './science_detail.html',
             title : '../../imgs/sky.jpg',
            content_info : '浏览次数',
            content : '100',
            release_time : '发布时间',
            time: '2017.1.1',
             info : '天空一号',
        }
    ]
  }
})