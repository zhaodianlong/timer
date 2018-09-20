// pages/mdetail/mdetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.moveid)
    this.getDetail(options.moveid)
  },
  getDetail(moveid) {
    let _this = this
    wx.request({
      url: 'https://ticket-api-m.mtime.cn/movie/detail.api?locationId=290&movieId=' + moveid,
      method: 'GET',
      header: {'content-type': 'json'},
      success(res) {
        console.log(res.data.data)
        _this.setData({ detail: res.data.data})
      }
    })
  },
  prePage() {
    wx.navigateBack({
      delta: 1
    })
  }
})