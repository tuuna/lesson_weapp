Page({
  data: {
    openPicker: false,
    needAnimation: false,
    contentHeight: 0
  },

  onLoad: function () {

  },

  onReady: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          //动态根据手机分辨率来计算内容的高度（屏幕总高度-顶部筛选栏的高度）
          contentHeight: (res.windowHeight - 72 * res.screenWidth / 750)
        });
      }
    })
  },

  onPickHeaderClick: function () {
    this.setData({
      openPicker: !this.data.openPicker,
      needAnimation: true
    })
  },
})