// pages/login/index.js
import { $wuxToast } from '../../components/wux/index'
import api from '../../utils/api'
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '../../assets/images/login1.jpg',
      '../../assets/images/login2.jpg',
      '../../assets/images/login3.jpg'
    ],
    loading:false,
    systemInfo: app.globalData.systemInfo,
    mobilePhone:'13382795319',
    password:'236562'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },
  //输入手机号
  onMobilePhone(e){
    this.setData({
      mobilePhone: e.detail.value
    })
  },
  //输入密码
  onPassword(e) {
    this.setData({
      password: e.detail.value
    })
  },
  
  //登录
  onLogin() {
    var _this = this
    if (!this.data.mobilePhone){
      $wuxToast().warning({
        text: '请输入手机号',
        icon:'prompt',
      });
      return false
    } else if (!this.data.password){
      $wuxToast().warning({
        text: '请输入密码',
        icon: 'prompt'
      });
      return false
    }
    _this.setData({
      loading: true,
    })

    wx.request({
      url: api.userLogin,
      header: {
        'Api-Version': '1.0',
        'DeviceId': '1',
        'App-Version': '010300'
      },
      method: 'post',
      data: {
        "MobilePhone": this.data.mobilePhone,
        "VCode": this.data.password
      },
      success(res) {
        if(res.data.Status == 200){
          wx.switchTab({
            url: '/pages/home/index',
            success() {
              _this.setData({
                loading: false,
              })
            }
          })
        }else{
          _this.setData({
            loading: false,
          },()=>{
            $wuxToast().error({
              text: res.data.Msg,
              type:'error'
            });
          })
        }
      }
    })
  }
})