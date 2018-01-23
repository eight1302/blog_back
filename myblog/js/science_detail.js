new Vue({
  el: '#science_detail',
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
       {
            name : '科技新闻详情',
            new_tab : '../science/science_detail.html',
        }
    ],
    detail : [
        {
            title : '天空一号',
            release_time : '发布时间',
            time: '2017.1.1',
            tail : [
                {
                    img : '../../imgs/sky.jpg',
                    info : '天宫一号[3]  （Tiangong-1或Heavenly Palace 1）是中国首个目标飞行器和空间实验室，属载人航天器，由中国航天科技集团公司所属中国空间技术研究院和上海航天技术研究院研制。高10.4米、重8.5吨[4]  。于2011年9月29日21时16分3秒在酒泉卫星发射中心发射[5]  ，由长征二号FT1火箭运载，火箭全长52米，运载能力为8.6吨[6]  。天宫一号设计在轨寿命两年[4]  。',
                 }
            ],
            
        }
    ]
  }
})