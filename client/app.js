//app.js
var qcloud = require('./vendor/wafer2-client-sdk/index')
var config = require('./config')

var appconfig = {
  onLaunch: function () {
    qcloud.setLoginUrl(config.service.loginUrl)
  },
  myData:{
     username:'技术服务中心',
    
  },



  appData:{
    userinfo:null,
    openId: "",
    imgurl:""
  }
}

App(appconfig)