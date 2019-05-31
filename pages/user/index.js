const app = getApp()
Page({
  data: {
    starCount: 0,
    forksCount: 0,
    visitTotal: 0,
    nickName: '',
    avatarUrl: '',
    extra:'true',//进设置里面改变这个值
    iconList: [{
      icon: 'cc-richscan_icon',
      color: 'red',
      badge: 0,
      name: '扫一扫'
    }, {
      icon: 'cc-erweima',
      color: 'orange',
      badge: 0,
      name: '二维码'
    }, {
      icon: 'cc-qian1',
      color: 'yellow',
      badge: 10,
      name: '工分'
    }, {
      icon: 'cc-qian',
      color: 'olive',
      badge: 22,
      name: '工饷'
    }, {
      icon: 'cc-resume-line',
      color: 'cyan',
      badge: 0,
      name: '简历'
    }]
  },
  onLoad() {
    var user = app.globalData.userInfo
    if (user) {
      this.setData({
        nickName: user.nickName,
        avatarUrl: user.avatarUrl
      })
    }
    let that = this;
    wx.showLoading({
      title: '数据加载中',
      mask: true,
    })
    let i = 0;
    numDH();

    function numDH() {
      if (i < 20) {
        setTimeout(function() {
          that.setData({
            starCount: i,
            forksCount: i,
            visitTotal: i
          })
          i++
          numDH();
        }, 20)
      } else {
        that.setData({
          starCount: that.coutNum(3000),
          forksCount: that.coutNum(484),
          visitTotal: that.coutNum(24000)
        })
      }
    }
    wx.hideLoading()
  },
  onClick() {
    wx.navigateTo({
      url: '/pages/index/index',
    })
  },
  coutNum(e) {
    if (e > 1000 && e < 10000) {
      e = (e / 1000).toFixed(1) + 'k'
    }
    if (e > 10000) {
      e = (e / 10000).toFixed(1) + 'W'
    }
    return e
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.target
    })
  },
  hideModal(e) {
    this.setData({
      modalName: null
    })
  },
  showQrcode() {
    wx.previewImage({
      current: 'https://image.weilanwl.com/color2.0/zanCode.jpg' // 当前显示图片的http链接      
    })
  },
  onBindGetUserInfo(e) {
    app.globalData.userInfo = e.detail.userInfo
    var user = app.globalData.userInfo
    console.log('user', user)
    if (user) {
      this.setData({
        nickName: user.nickName,
        avatarUrl: user.avatarUrl
      })
    }
  }
})