//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist:{}
  },
  onLoad: function () {
    var that = this;
    wx.getStorage({
      key: 'timetable',
      success: function (res) {
        console.log(res.data.data)
        that.setData({
          wlist: res.data.data
        })
      },
      fail: function () {
        wx.navigateTo({
          url: '/pages/nuist/nuist',
        })
      }
    })

    console.log('onLoad')
  }
})