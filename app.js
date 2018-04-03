//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        if(res.code) {
          wx.request({
            url: 'http://127.0.0.1:8000/api/onLogin',
            data: {code:res.code},
            method: 'POST',
            header:{'content-type':'application/json'},
            success:function(data){
              console.log(data.data)
              wx.setStorage({
                key: 'token',
                data: data.data.token,
              })
               if(data.data.code == '400') {
                 wx.navigateTo({
                   url: '/pages/reg/reg'
                 }); 
               } else if(data.data.code == '200'){
                 console.log('登录成功')
               } else {
                 console.log('服务器出错')
               }
            }
          })
        } else {
          console.log('获取用户登录态失败!'+res.errMsg)
        }
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null
  }
})