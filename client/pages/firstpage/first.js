var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    text:"这里是内容",
    btntext:"按钮",
    show:true,
    id:"",
    news:["aaa","bbb","ccc"],
    username:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({text:app.myData.username});
    if (app.appData.userinfo==null){
       wx.redirectTo({url:"../login/login"})
     }
     else{
      this.setData({ username: app.appData.userinfo.username })
     }
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

  btnclick:function(){
    var isshow=this.data.show;
    var newsdata=this.data.news;
    newsdata.shift();
    this.setData({ text: "这是新的内容。。。", show: !isshow,news:newsdata})
  }
})