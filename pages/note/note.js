Page({
  data: {
    tempFilePaths: '',
    token: '',
    lists:{}
  },
  onLoad: function (options) {
    var that = this;
    wx.getStorage({
      key: 'token',
      success: function (res) {
        wx.request({
          url: "https://class.vampirebitter.top/api/getNote",
          data: { token: res.data },
          method: "POST",
          success: function (data) {
            console.log(data.data)
            that.setData({
              lists: data.data.data
            })
          }
        })
      }
    })
  },
  onPullDownRefresh: function(){
    wx.switchTab({
      url: '/pages/note/note',
      //页面刷新
      success: function (e) {
        var page = getCurrentPages().pop();
        if (page == undefined || page == null) return;
        page.onLoad();
      }
    })
    wx.stopPullDownRefresh();
  },
  chooseimage: function () {
    var that = this;
    wx.showActionSheet({
      itemList: ['从相册中选择', '拍照'],
      itemColor: "#CED63A",
      success: function (res) {
        if (!res.cancel) {
          if (res.tapIndex == 0) {
            that.chooseWxImage('album')
          } else if (res.tapIndex == 1) {
            that.chooseWxImage('camera')
          }
        }
      }
    })

  },

  chooseWxImage: function (type) {
    
    var token = this;
    wx.getStorage({
      key: 'token',
      success: function (res) {
        console.log(res.data)
        token.setData({
          token: res.data
        })
      }
    })
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: [type],
      success: function (res) {
        console.log(res);
        that.setData({
          tempFilePaths: res.tempFilePaths[0],
        })
         var tempFilePaths = res.tempFilePaths
         console.log(tempFilePaths[0])
         console.log(token.data.token)
         wx.uploadFile({
           url: 'https://class.vampirebitter.top/api/upload',
           filePath: tempFilePaths[0],
           name: 'file',
           formData: {
             'token': token.data.token
           },
           success: function (res) {
             console.log(res.data)
              wx.switchTab({
              url: '/pages/note/note',
               //页面刷新
               success: function (e) {
                 var page = getCurrentPages().pop();
                 if (page == undefined || page == null) return;
                 page.onLoad();
               }
             })
            //  var data = res.data
             //do something  
           }  
      })
    }
    })
  }


}) 