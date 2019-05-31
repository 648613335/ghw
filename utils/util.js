//日期
const formatTime = params => {
  params = params || {}
  var date = params.date || new Date()
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()
  return [year, month, day].map(formatNumber).join(params.join || '-') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}
//最低两位数 1 → 01
const formatNumber = n => {
  n = n && n.toString() || ''
  return n[1] ? n : '0' + n
}

const request = (parmas) => {
  wx.request(Object.assign({
    url: '',
    data: '',
    header: {},
    method: 'GET',
    dataType: 'json',
    success: function(res) {
      
    },
    fail: function(res) {},
    complete: function(res) {},
  }, params))

}



module.exports = {
  formatTime: formatTime,
  formatNumber: formatNumber

}