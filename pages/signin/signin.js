// pages/signin/signin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  callQRcode: function () {
    wx.scanCode({
      onlyFromCamera:true,
      success: (res) => {
        var data = res.result;
        var str = "promotion.coupon.code.yingwumeijia.com";
        var arr = null;
        if (data.indexOf(str) > -1) {
          arr = data.split(str);
          var api = "https://preconapi.yingwumeijia.com/activity/coupon/use?couponCode=" + arr[1];

          wx.request({
            url: api, //仅为示例，并非真实的接口地址
            method: "POST",
            success: function (res) {
              if (res.data.succ) {
                wx.showToast({
                  title: "签到成功",
                  image: "../images/download_close_ico@3x.png",
                  duration: 3000,
                  mask: true
                });
              }
              else {
                wx.showToast({
                  title: res.data.message,
                  image: "../images/download_close_ico@3x.png",
                  duration: 3000,
                  mask: true
                });
              }
            }
          })
        }

      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})