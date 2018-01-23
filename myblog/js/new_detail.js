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
            name : '最新新闻',
            new_tab : '../new/new.html',
        },
         {
            name : '新闻详情',
            new_tab : '../new/new_detail.html',
        }
    ],
    detail : [
        {
            title : '关于科技的进步是否影响着人类',
            release_time : '发布时间',
            time: '2017.1.1',
            tail : [
                {
                    img : '../../imgs/hm.jpg',
                    info : '航母下水、大飞机飞天、光量子计算机问世、“慧眼”探空、高铁飞驰、“悟空”立功……2017年，我国科技领域硕果累累，令国人振奋，让世界震惊。快来一起看看，今年我国都取得了哪些重大科技成果。',
                   
                }, {
                    img : '../../imgs/tg.jpg',
                    info : '4月22日，北京航天飞行控制中心大厅大屏幕显示天舟一号与天宫二号自动交会对接画面。这是天舟一号与天宫二号进行的首次自动交会对接，也是我国自主研制的货运飞船与空间实验室的首次交会对接。',
                   
                }, {
                    img : '../../imgs/hk.jpg',
                    info : '世界首台超越早期经典计算机的光量子计算机5月3日在上海亮相，10个超导量子比特纠缠首次成功实现，中国科学家再次站在了创新的前沿。中国科技大学潘建伟院士及同事陆朝阳、朱晓波等，联合浙江大学王浩华研究组，在去年首次实现10光子纠缠操纵的基础上，构建了这台基于单光子的量子计算机。',
                   
                }, {
                    img : '../../imgs/hm.jpg',
                    info : '5月5日，我国具有完全自主知识产权、首款按照最新国际适航标准研制的干线民用飞机C919首飞成功。它的首飞意味着中国已跻身世界少数能够自主制造大型客机国家之列。',
                   
                }, {
                    img : '../../imgs/hy.jpg',
                    info : '5月18日，我国南海神狐海域天然气水合物（又称“可燃冰”）试采实现连续187个小时的稳定产气。这是我国首次实现海域可燃冰试采成功。',
                   
                }, {
                    img : '../../imgs/gt.jpg',
                    info : '9月21日，在京沪高铁线路上开始投入运营的“复兴号”最高时速达到355公里，这标志着我国成为世界高铁商业运营速度最高的国家。',
                }
            ],
            
        }
    ]
  }
})