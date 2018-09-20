// pages/future/future.js
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
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    moveComings: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadData()
  },
  loadData() {
    let _this = this;
    wx.request({
      url: 'https://api-m.mtime.cn/Movie/MovieComingNew.api?locationId=290',
      method: "GET",
      header: {"content-type": "json"},
      success(res){
        console.log(res.data.moviecomings)
        _this.setData({moveComings: res.data.moviecomings})
      }
    })
  },
  wantFn(e) {
    wx.showToast({
      title: e.target.dataset.name
    })
  },
  toDetail(e) {
    console.log(e)
    wx.navigateTo({
      url: '../mdetail/mdetail?moveid=' + e.currentTarget.dataset.moveid,
    })
  }
})