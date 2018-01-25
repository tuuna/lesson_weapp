var util = require('../../common/common.js');
Page({
  data:{
    userInfo:{},
    img_bg:"../../images/37.png",
    line1:[
      {
        name:"我的课表",
        img:"../../images/33.png",
        id:1,
        url:"timetable"
      },
      {
        name:"课程签到",
        img: "../../images/34.png",
        id:2,
        url:"signin"
      },
      {
        name:"我的作业",
        img: "../../images/35.png",
        id:3,
        url:"homework"
      },
      {
        name:"意见反馈",
        img: "../../images/36.png",
        id:4,
        url:"suggestion"
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