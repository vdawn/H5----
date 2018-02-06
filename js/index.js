window.location.replace('https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx5708b1cabe40f6cd&redirect_uri=http://2018nianyun.yicuichina.com&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect')
$(function () {
  // 获取code
  var a = window.location.href;
  var code = a.slice(a.indexOf("code=") + 5, a.indexOf("&"));
  // redirect_uri里的域名
  var b = "://www.web2312.com/yuanxia/111";
  if (code != b) {
    $.ajax({
      url: "https://2018nianyun.yicuichina.com/api/yicui/v1",
      type: "post",
      async: false,
      data: JSON.stringify({
        type: "code",
        code: code
      }),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      success: function (data) {
        var openid = JSON.stringify(data.data.wxOpenId);
        localStorage.setItem("openid",openid);

      },
      error: function (e) {
      }
    })
    window.location.href = 'luck.html';
  }

});