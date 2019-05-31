// pages/home/index.js
const MONTHS = ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May.', 'June.', 'July.', 'Aug.', 'Sept.', 'Oct.', 'Nov.', 'Dec.'];

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
    iconList: [{
      icon: 'cc-erweima',
      color: 'red',
      badge: 120,
      name: 'VR'
    }, {
      icon: 'cc-erweima',
      color: 'orange',
      badge: 'dot',
      name: '录像'
    }, {
      icon: 'cc-erweima',
      color: 'yellow',
      badge: 0,
      name: '图像'
    }, {
      icon: 'cc-erweima',
      color: 'olive',
      badge: 22,
      name: '通知'
    }, {
      icon: 'cc-erweima',
      color: 'cyan',
      badge: 0,
      name: '排行榜'
    }, {
      icon: 'cc-erweima',
      color: 'blue',
      badge: 0,
      name: '皮肤'
    }, {
      icon: 'cc-erweima',
      color: 'purple',
      badge: 0,
      name: '发现'
    }, {
      icon: 'cc-erweima',
      color: 'mauve',
      badge: 0,
      name: '帮助'
    }, {
      icon: 'cc-erweima',
      color: 'purple',
      badge: 0,
      name: '问答'
    }, {
      icon: 'cc-erweima',
      color: 'mauve',
      badge: 0,
      name: '版权'
    }],
    year: new Date().getFullYear(), // 年份
    month: new Date().getMonth() + 1, // 月份
    day: new Date().getDate(),
    str: MONTHS[new Date().getMonth()], // 月份字符串
    demo4_days_style: [],
    //卡片头部
    carToolHd: {
      show: true,
      title: "项目名称",
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //tab 个数
    wx.setTabBarBadge({
      index: 0,
      text: '5'
    })

    //日历
    const days_count = new Date(this.data.year, this.data.month, 0).getDate();
    let demo4_days_style = new Array;
    for (let i = 1; i <= days_count; i++) {
      if (i == 3) {
        demo4_days_style.push({
          month: 'current',
          day: i,
          color: 'white',
          background: '#46c4f3'
        });
      } else {
        demo4_days_style.push({
          month: 'current',
          day: i,
          color: 'white'
        });
      }
    }
    this.setData({
      demo4_days_style
    });
  },
  //点击日历
  dayClick(e) {
    // {
    //   background: "transparent"
    //   color: ""#4a4f74""
    //   day: 4
    //   lunarDay: "十九"
    //   lunarMonth: "二月"
    //   month: 4
    //   year: 2018
    // }
    console.log(e.detail);

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

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})