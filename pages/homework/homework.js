Page({
  data: {
    // text:"这是一个页面"
    open: false,
    // detail: false
    _point: undefined
  },
  showitem: function (event) {
    // if(this.data.detail) {
    //   this.setData({
    //     open: !this.data.open,
    //     detail: !this.data.detail
    //   })
    // } else {
    //   this.setData({
    //     open: !this.data.open
    //   })
    // } 
    this.setData({
      _point: event.currentTarget.dataset.time,
      open: !this.data.open,
      detail: this.data.detail == true ? false :false
    })
  },
  showdetail: function () {
    this.setData({
      detail: !this.data.detail
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    wx.getStorage({
      key: 'token',
      success: function (res) {
        wx.request({
          url: 'https://class.vampirebitter.top/api/getWork',
          data: {token:res.data},
          method: 'post',
          success: function (data) {
            console.log(data.data.data)
            that.setData({
              homeworks: data.data.data
            })
          }
        })
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})