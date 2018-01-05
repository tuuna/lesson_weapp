var util = require('../../common/common.js');
let URLINDEX=util.prefix();
Page({
  data:{
    userInfo:{},
    img_bg:URLINDEX+"/index/bd@2x.png",
    line1:[
      {
        name:"我的课表",
        img:URLINDEX+"/index/youhuijuan.png",
        id:1
      },
      {
        name:"课程签到",
        img:URLINDEX+"/index/integral.png",
        id:2
      },
      {
        name:"我的作业",
        img:URLINDEX+"/index/CustomerService.png",
        id:3
      },
      {
        name:"意见反馈",
        img:URLINDEX+"/index/positioning.png",
        id:4
      }
    ],
  },
  onLoad:function(options){
    var that = this;
     wx.getUserInfo({
      success: function(res) {
        that.setData({
          userInfo:res.userInfo
        })
      }
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    console.log(this.data.userInfo)
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})