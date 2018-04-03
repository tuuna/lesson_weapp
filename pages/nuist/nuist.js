var util = require('../../common/common.js');
// pages/reg/reg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timetable:{},
    // token:'',
    toast1Hidden: true,
    modalHidden: true,
    modalHidden2: true,
    notice_str: '',
  },

  toast1Change: function (e) {
    this.setData({ toast1Hidden: true });
  },
  //弹出确认框  
  modalTap: function (e) {
    this.setData({
      modalHidden: false
    })
  },
  confirm_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '提交成功'
    });
  },
  cancel_one: function (e) {
    console.log(e);
    this.setData({
      modalHidden: true,
      toast1Hidden: false,
      notice_str: '取消成功'
    });
  },
  //弹出提示框  
  modalTap2: function (e) {
    this.setData({
      modalHidden2: false
    })
  },
  modalChange2: function (e) {
    this.setData({
      modalHidden2: true
    })
  },
  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  formSubmit: function (e) {
    var that = this;
    var formData = e.detail.value;
    console.log(formData);
    wx.request({
      url: 'http://127.0.0.1:8000/api/getTimetable',
      data: formData,
      method: 'post',
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        console.log(res.data)
         wx.setStorage({
           key: 'timetable',
           data: res.data,
         })
          wx.navigateTo({
            url: '/pages/timetable/timetable',
          })
      }
    })
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