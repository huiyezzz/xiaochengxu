var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgurl:"",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ imgurl: app.appData.imgurl })
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
    
  },
  shangchuan:function(){

    wx.chooseImage({
      success: function (res) {
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        var str = app.appData.openId;
        var tempFilePaths = res.tempFilePaths
        wx.uploadFile({
          url: 'http://qfdibz.natappfree.cc/shangchuan.action?id='+str, //仅为示例，非真实的接口地址
          filePath: tempFilePaths[0],
          name: 'file',
          success: function (res) {
            var data = res.data
            //do something
          }
        })
      }
    })
  },
  formSubmit: function (e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    var data2=e.detail.value;
    var this2 = this;
    this2.setData({ imgurl: app.appData.imgurl })
    var str = 'sfsfsfsfsdfs';
    var url = 'http://qfdibz.natappfree.cc/insert.action?openId=' + str;
    console.log(url)
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      data: data2,
      method:'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        this2.setData({ name: data.name, phone: data.phone, company: data.company, more: data.more, email: data.email });
      }
    }) 
  },
})