// pages/suggestion/suggestion.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
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

  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    console.log(formData);
    wx.request({
      url: 'https://class.vampirebitter.top/api/send',
      data: formData,
      method: 'post',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
        if (res.data.code == '200') {
          wx.showToast({
            title: "签到成功",
            // image: "../images/download_close_ico@3x.png",
            duration: 3000,
            mask: true,
            success:function() {
              wx.switchTab({
                url: '/pages/ucenter/ucenter',
              })
            }
          });
        }
        else {
          wx.showToast({
            title: res.data.msg,
            // image: "../images/download_close_ico@3x.png",
            duration: 3000,
            mask: false,
            success: function () {
              wx.switchTab({
                url: '/pages/ucenter/ucenter',
              })
            }
          });
        }
      }
      })
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