// pages/shoppingMall/index.js

import {
  $stopWuxRefresher
} from '../../components/wux/index'
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
    goodsList: [{
        title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
        stock: 55,
        price: 999
      }, {
        title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
        stock: 55,
        price: 999
      },
      {
        title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
        stock: 55,
        price: 999
      }, {
        title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
        stock: 55,
        price: 999
      }
    ],
    goodsListOld: [{
      title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
      stock: 55,
      price: 999
    }, {
      title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
      stock: 55,
      price: 999
    },
    {
      title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
      stock: 55,
      price: 999
    }, {
      title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
      stock: 55,
      price: 999
    }
    ],
    pullUpStatus: false
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

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    setTimeout(() => {
      this.setData({
        goodsList: this.data.goodsListOld
      })
      wx.stopPullDownRefresh()
    }, 2000)
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {
    wx.showLoading({
      mask:true
    })
    if (!this.data.pullUpStatus){
      this.setData({
        pullUpStatus: true
      })
      setTimeout(() => {
        this.setData({
          goodsList: this.data.goodsList.concat({
            title: '荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀华为HONOR荣耀',
            stock: 55,
            price: 999
          })
        })
        this.setData({
          pullUpStatus: false
        })
        wx.hideLoading()
      }, 3000)
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  onRefresh() {
    console.log('出发 下拉刷新')
    $stopWuxRefresher()
  }
})