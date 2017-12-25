var qcloud = require('../../vendor/wafer2-client-sdk/index')
var config = require('../../config')
var util = require('../../utils/util.js')
var app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    name:"",
    phone:"",
    company:"",
    email:"",
    more:"",
    finger:"",
    eye:"",
    img2: "",
    img1: "",
    img0:"",
    imgurl:"",
    logged: false,
    dianzan:"../img/weizan.png",
    yn:true,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var this2=this;
    this2.setData({imgurl:app.appData.imgurl})
    var str =app.appData.openId;
    var url = 'http://qfdibz.natappfree.cc/CardqueryById.action?id=' + str;
      console.log(url)
    wx.request({
      url: url, //仅为示例，并非真实的接口地址
      header: {
        'content-type': 'json' // 默认值
      },
      success: function (res) {
        var data = res.data;
        console.log(data);
        var list=data.list;
        var len=list.length;
        
        this2.setData({ name: data.name, phone: data.phone, company: data.company, more: data.more, email: data.email,finger:data.finger,eye:data.eye,img0:list[0].filename});
        if(len==2){
          this2.setData({img1:list[1].filename});
        }
        if(len==3){
          this2.setData({ img1: list[1].filename });
          this2.setData({ img2: list[2].filename });
        }
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
    
  },
  dianzan :function(){
    var this2=this
   if(this.data.yn){
     var finger2 = this.data.finger + 1
     this.setData({ dianzan: "../img/yizan.png", finger: finger2 })
     var this2 = this;
     var str = app.appData.openId;
     var url = 'http://qfdibz.natappfree.cc/updateCard.action?id=' + str;
     console.log(url)
     wx.request({
       url: url, //仅为示例，并非真实的接口地址
       header: {
         'content-type': 'json' // 默认值
       },
       success: function (res) {
         console.log(res);
       }
     }) 
     this2.setData({yn:false})
   }
  }
})