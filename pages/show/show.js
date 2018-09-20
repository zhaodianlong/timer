// pages/show/show.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 1000,
    moveData: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadMore()
  },
  loadMore() {
    // 加载数据
    let _this = this;
    wx.request({
      url: 'https://api-m.mtime.cn/Showtime/LocationMovies.api?locationId=290',
      method: "GET",
      header: {'content-type': 'json'},
      success(res) {
        console.log(res)
        _this.setData({moveData: res.data.ms})
      }
    })
  },
  payMsg() {
    wx.showToast({
      title: '购票成功',
    })
  },
  toDetail(e) {
    console.log(e)
    wx.navigateTo({
      url: '../mdetail/mdetail?moveid='+e.currentTarget.dataset.moveid,
    })
  }
})