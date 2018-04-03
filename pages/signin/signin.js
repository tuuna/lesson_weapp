// pages/signin/signin.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  callQRcode: function () {
    wx.getStorage({
      key: 'token',
      success: function(tres) {
        wx.scanCode({
          onlyFromCamera: true,
          success: (res) => {
            console.log(res);
            var data = res.result;
            var api = data + "/"+tres.data;
            wx.request({
              url: api, 
              method: "GET",
              success: function (res) {
                console.log(res)
                if (res.data.code == '200') {
                  wx.showToast({
                    title: "签到成功",
                    // image: "../images/download_close_ico@3x.png",
                    duration: 3000,
                    mask: true
                  });
                }
                else {
                  wx.showToast({
                    title: res.data.msg,
                    // image: "../images/download_close_ico@3x.png",
                    duration: 3000,
                    mask: false
                  });
                }
              }
            })
          }
      })
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