'use strict';

const DataObject = {

    headerLink(){
         return [
             {link: 'http://www.1396p.com?utm=msite' , title:'电脑版',className:'csj_pcIcon'},{
              link: '#' , title:'反馈',className:'csj_fanhui'}
         ]
    },
    noticeData(){
         return "尊敬的用户，最近发现有不法分子冒用皇家彩世界的名义建立网站牟利，为了确保您的利益不受损害，请从1398导航站进入皇家彩世界，网址：www.1398x.com"
    },
    bannerData(){
         return [{

         }]
    },
    getCdn(){
        return "http://rescsjm.56hx.com/";
    },
    navData(){
              return  [
                   {id:1,link:'./video',className:'csj_navIcon01',title:'视频直播',target:'_self'},
                   {id:2,link:'./lottery/pk10/plan',className:'csj_navIcon02',title:'推荐计划',target:'_self'},
                   {id:3,link:'./changlong',className:'csj_navIcon03',title:'长龙统计',target:'_self'},
                   {id:4,link:'./article/list',className:'csj_navIcon04',title:'技巧资讯',target:'_self'},
                   {id:5,link:'http://www.1396csjm.com/?p=mcf1',className:'csj_navIcon05',title:'密地寻宝',target:'_blank'}
              ]
    },
    mainNavData(){
            let cdn = this.getCdn();
            return [{
                 title:'高频彩',description:'开奖速度快',child:[
                 {title:'北京赛车PK10',description:'',img:cdn+"/assets/pic/icon1.png",link:'./lottery/pk10'},
                 {title:'重庆时时彩',description:'',img:cdn+"/assets/pic/icon2.png",link:'./lottery/cqssc'},
                 {title:'广东快乐十分',description:'',img:cdn+"/assets/pic/icon3.png",link:'./lottery/gdkl10'},
                 {title:'天津时时彩',description:'',img:cdn+"/assets/pic/icon5.png",link:'./lottery/tjssc'},
                 {title:'新疆时时彩',description:'',img:cdn+"/assets/pic/icon6.png",link:'./lottery/xjssc'},
                 {title:'广东11选5',description:'',img:cdn+"/assets/pic/icon7.png",link:'./lottery/gd11x5'},
                 {title:'江西11选5',description:'',img:cdn+"/assets/pic/icon8.png",link:'./lottery/jx11x5'},
                 {title:'十一运夺金',description:'',img:cdn+"/assets/pic/icon17.png",link:'./lottery/sd11x5'},
                 {title:'幸运农场',description:'',img:cdn+"/assets/pic/icon9.png",link:'./lottery/xync'},
                 {title:'幸运飞艇',description:'',img:cdn+"/assets/pic/icon10.png",link:'./lottery/xyft'},
                 {title:'上海时时乐',description:'',img:cdn+"/assets/pic/icon11.png",link:'./lottery/shssl'},
                 {title:'江苏骰宝(快3)',description:'',img:cdn+"/assets/pic/icon12.png",link:'./lottery/jsk3'},
                 {title:'北京快乐8',description:'',img:cdn+"/assets/pic/icon13.png",link:'./lottery/kl8'},
                 {title:'圣地彩',description:'',img:cdn+"/assets/pic/icon14.png",link:'./lottery/sdc'}

                ]},{
                    title:'数字彩',description:'福彩和体彩', child:[{
                    title:'福彩3D',description:'',img:cdn+"/assets/pic/icon15.png",link:'/lottery/fc3d'}, {
                    title:'排列3',description:'',img:cdn+"/assets/pic/icon16.png",link:'/lottery/pl3'}]
            }]
      },
      lotteryVideoData(){
         let cdn = this.getCdn();
         return {
             'pk10': {video: true, url: './video/pk10', img: cdn + "/assets/videopic/pk10.jpg"},
             'xyft': {video: false, url: '', img: cdn + "/assets/videopic/xyft.jpg"},
             'cqssc': {video: true, url: './video/cqssc', img: cdn + "/assets/videopic/cqssc.jpg"},
             'tjssc': {video: false, url: '', img: cdn + "/assets/videopic/wait.jpg"},
             'xjssc': {video: false, url: '', img: cdn + "/assets/videopic/xjssc.jpg"},
             'sdc': {video: false, url: '', img: cdn + "/assets/videopic/wait.jpg"},
             'gdkl10': {video: false, url: '', img: cdn + "/assets/videopic/gdkl10.jpg"},
             'xync': {video: true, url: './video/xync', img: cdn + "/assets/videopic/xync.jpg"},
             'kl8': {video: false, url: '', img: cdn + "/assets/videopic/kl8.jpg"},
             'jx11x5': {video: false, url: '', img: cdn + "/assets/videopic/jx11x5.jpg"},
             'gd11x5': {video: false, url: '', img: cdn + "/assets/videopic/gd11x5.jpg"},
             'sd11x5': {video: false, url: '', img: cdn + "/assets/videopic/11x5.jpg"},
             'fc3d': {video: false, url: '', img: cdn + "/assets/videopic/fc3d.jpg"},
             'pl3': {video: false, url: '', img: cdn + "/assets/videopic/pl3.jpg"},
             'shssl': {video: false, url: '', img: cdn + "/assets/videopic/shssl.jpg"},
             'jsk3': {video: true, url: './video/jsk3', img: cdn + "/assets/videopic/jsk3.jpg"}
         }
      },
      lotteryData(){
          let cdn = this.getCdn();
          return [
              {categoryId:63,code:'pk10',title:'北京赛车PK10',class:'hover',funcData:[
                  {id:1,title:'历史开奖',class:'hover',href:'./lottery/pk10',code:'index'},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/pk10/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'号码前后路珠',class:'',href:'./lottery/pk10/leftorright',code:'leftorright'},
                  {id:4,title:'冠亚和路珠',class:'',href:'./lottery/pk10/guanyahe',code:'guanyahe'},
                  {id:5,title:'免费参考',class:'',href:'./lottery/pk10/betgame',code:'betgame'},
                  {id:6,title:'冷热码分析',class:'',href:'./lottery/pk10/hotcold',code:'hotcold'},
                  {id:7,title:'今日号码统计',class:'',href:'./lottery/pk10/todaystat',code:'todaystat'}
              ],href:'./lottery/pk10',img:cdn+"/assets/pic/icon1.png"},
              {categoryId:61,code:'cqssc',title:'重庆时时彩',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/cqssc',code:"index"},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/cqssc/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'总和路珠',class:'',href:'./lottery/cqssc/totallz',code:'totallz'},
                  {id:4,title:'免费参考',class:'',href:'./lottery/cqssc/betgame',code:'betgame'},
                  {id:5,title:'冷热码分析',class:'',href:'./lottery/cqssc/hotcold',code:'hotcold'},
                  {id:6,title:'今日号码统计',class:'',href:'./lottery/cqssc/todaystat',code:'todaystat'}
              ],href:'./lottery/cqssc',img:cdn+"/assets/pic/icon2.png"},
              {categoryId:62,code:'gdkl10',title:'广东快乐十分',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/gdkl10',code:"index"},
                  {id:2,title:'总和路珠',class:'',href:'./lottery/gdkl10/totallz',code:'totallz'},
                  {id:3,title:'单双大小路珠',class:'',href:'./lottery/gdkl10/bigorsmall',code:'bigorsmall'},
                  {id:4,title:'尾数大小路珠',class:'',href:'./lottery/gdkl10/endlz',code:'endlz'},
                  {id:5,title:'免费参考',class:'',href:'./lottery/gdkl10/betgame',code:'betgame'},
                  {id:6,title:'今日号码统计',class:'',href:'./lottery/gdkl10/todaystat',code:'todaystat'}
              ],href:'./lottery/gdkl10',img:cdn+"/assets/pic/icon3.png"},

              {categoryId:75,code:'tjssc',title:'天津时时彩',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/tjssc',code:"index"},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/tjssc/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'总和路珠',class:'',href:'./lottery/tjssc/totallz',code:'totallz'},
                  {id:4,title:'免费参考',class:'',href:'./lottery/tjssc/betgame',code:'betgame'},
                  {id:5,title:'冷热码分析',class:'',href:'./lottery/tjssc/hotcold',code:'hotcold'},
                  {id:6,title:'今日号码统计',class:'',href:'./lottery/tjssc/todaystat',code:'todaystat'}
              ],href:'./lottery/tjssc',img:cdn+"/assets/pic/icon5.png"},
              {categoryId:74,code:'xjssc',title:'新疆时时彩',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/xjssc',code:"index"},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/xjssc/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'总和路珠',class:'',href:'./lottery/xjssc/totallz',code:'totallz'},
                  {id:4,title:'免费参考',class:'',href:'./lottery/xjssc/betgame',code:'betgame'},
                  {id:5,title:'冷热码分析',class:'',href:'./lottery/xjssc/hotcold',code:'hotcold'},
                  {id:6,title:'今日号码统计',class:'',href:'./lottery/xjssc/todaystat',code:'todaystat'}
              ],href:'./lottery/xjssc',img:cdn+"/assets/pic/icon6.png"},
              {categoryId:78,code:'gd11x5',title:'广东11选5',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'/lottery/gd11x5',code:'index'},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/gd11x5/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'总和路珠',class:'',href:'./lottery/gd11x5/totallz',code:'totallz'},
                  {id:4,title:'今日号码统计',class:'',href:'./lottery/gd11x5/todaystat',code:'todaystat'},
                  {id:5,title:'冷热码分析',class:'',href:'./lottery/gd11x5/hotcold',code:'hotcold'}
              ],href:'./lottery/gd11x5',img:cdn+"/assets/pic/icon7.png"},
              {categoryId:77,code:'jx11x5',title:'江西11选5',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/jx11x5',code:'index'},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/jx11x5/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'总和路珠',class:'',href:'./lottery/jx11x5/totallz',code:'totallz'},
                  {id:4,title:'今日号码统计',class:'',href:'./lottery/jx11x5/todaystat',code:'todaystat'},
                  {id:5,title:'冷热码分析',class:'',href:'./lottery/jx11x5/hotcold',code:'hotcold'}
              ],href:'./lottery/jx11x5',img:cdn+"/assets/pic/icon8.png"},

              {categoryId:76,code:'sd11x5',title:'十一运夺金',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/sd11x5',code:'index'},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/sd11x5/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'总和路珠',class:'',href:'./lottery/sd11x5/totallz',code:'totallz'},
                  {id:4,title:'今日号码统计',class:'',href:'./lottery/sd11x5/todaystat',code:'todaystat'},
                  {id:5,title:'冷热码分析',class:'',href:'./lottery/sd11x5/hotcold',code:'hotcold'}
              ],href:'./lottery/sd11x5',img:cdn+"/assets/pic/icon17.png"},
              {categoryId:67,code:'xync',title:'幸运农场',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/xync',code:"index"},
                  {id:2,title:'总和路珠',class:'',href:'./lottery/xync/totallz',code:'totallz'},
                  {id:3,title:'单双大小路珠',class:'',href:'./lottery/xync/bigorsmall',code:'bigorsmall'},
                  {id:4,title:'尾数大小路珠',class:'',href:'./lottery/xync/endlz',code:'endlz'},
                  {id:5,title:'免费参考',class:'',href:'./lottery/xync/betgame',code:'betgame'},
                  {id:6,title:'今日号码统计',class:'',href:'./lottery/xync/todaystat',code:'todaystat'}
              ],href:'./lottery/xync',img:cdn+"/assets/pic/icon9.png"},
              {categoryId:69,code:'xyft',title:'幸运飞艇',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/xyft',code:'index'},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/xyft/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'号码前后路珠',class:'',href:'./lottery/xyft/leftorright',code:'leftorright'},
                  {id:4,title:'冠亚和路珠',class:'',href:'./lottery/xyft/guanyahe',code:'guanyahe'},
                  {id:5,title:'免费参考',class:'',href:'./lottery/xyft/betgame',code:'betgame'},
                  {id:6,title:'冷热码分析',class:'',href:'./lottery/xyft/hotcold',code:'hotcold'},
                  {id:7,title:'今日号码统计',class:'',href:'./lottery/xyft/todaystat',code:'todaystat'}
              ],href:'./lottery/xyft',img:cdn+"/assets/pic/icon10.png"},
              {categoryId:72,code:'shssl',title:'上海时时乐',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/shssl',code:'index'},
                  {id:2,title:'总和路珠',class:'',href:'./lottery/shssl/totallz',code:'totallz'},
                  {id:3,title:'免费参考',class:'',href:'./lottery/shssl/betgame',code:'betgame'}
              ],href:'./lottery/shssl',img:cdn+"/assets/pic/icon11.png"},
              {categoryId:65,code:'jsk3',title:'江苏骰宝(快3)',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/jsk3',code:'index'},
                  {id:2,title:'总和路珠',class:'',href:'./lottery/jsk3/totallz',code:'totallz'},
                  {id:3,title:'免费参考',class:'',href:'./lottery/jsk3/freeck',code:'freeck'}
              ],href:'./lottery/jsk3',img:cdn+"/assets/pic/icon12.png"},
              {categoryId:70,code:'kl8',title:'北京快乐8',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/kl8',code:'index'},
                  {id:2,title:'总和路珠',class:'',href:'./lottery/kl8/totallz',code:'totallz'},
                  {id:3,title:'奇偶盘路珠',class:'',href:'./lottery/kl8/jolz',code:'jolz'},
                  {id:4,title:'上下盘路珠',class:'',href:'./lottery/kl8/sxlz',code:'sxlz'},
                  {id:5,title:'免费参考',class:'',href:'./lottery/kl8/freeck',code:'freeck'},
                  {id:6,title:'',class:'',href:'',code:''}
              ],href:'./lottery/kl8',img:cdn+"/assets/pic/icon13.png"},
              {categoryId:73,code:'sdc',title:'圣地彩',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/sdc',code:"index"},
                  {id:2,title:'单双大小路珠',class:'',href:'./lottery/sdc/bigorsmall',code:'bigorsmall'},
                  {id:3,title:'总和路珠',class:'',href:'./lottery/sdc/totallz',code:'totallz'},
                  {id:4,title:'免费参考',class:'',href:'./lottery/sdc/betgame',code:'betgame'},
                  {id:5,title:'冷热码分析',class:'',href:'./lottery/sdc/hotcold',code:'hotcold'},
                  {id:6,title:'今日号码统计',class:'',href:'./lottery/sdc/todaystat',code:'todaystat'}
              ],href:'./lottery/sdc',img:cdn+"/assets/pic/icon14.png"},
              {categoryId:80,code:'fc3d',title:'福彩3D',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/fc3d',code:'index'},
                  {id:2,title:'总和路珠',class:'',href:'./lottery/fc3d/totallz',code:'totallz'},
                  {id:3,title:'大小单双路珠',class:'',href:'./lottery/fc3d/bigorsmall',code:'bigorsmall'}
              ],href:'./lottery/fc3d',img:cdn+"/assets/pic/icon15.png"},
              {categoryId:79,code:'pl3',title:'排列3',class:'',funcData:[
                  {id:1,title:'历史开奖',class:'',href:'./lottery/pl3',code:'index'},
                  {id:2,title:'总和路珠',class:'',href:'./lottery/pl3/totallz',code:'totallz'},
                  {id:3,title:'大小单双路珠',class:'',href:'./lottery/pl3/bigorsmall',code:'bigorsmall'}
              ],href:'./lottery/pl3',img:cdn+"/assets/pic/icon16.png"}
          ]
     }

  }

export  default  DataObject;



