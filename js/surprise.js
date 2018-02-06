// 上下图片对应
var picone = document.getElementsByClassName("picone")[0];
var pictwo = document.getElementsByClassName("pictwo")[0];
var random = Math.floor(Math.random() * 20);
picone.src = "images/more/" + random + ".jpg";
pictwo.src = "images/more/" + (100 + random) + ".jpg";
// 获取用户头像和昵称
$(function () {
	// 获取openid
	var newOpenid = localStorage.getItem("openid");
	var newopenid = newOpenid.replace("\"", "");
	var openid = newopenid.replace("\"", "");
	var datas = null;
	$.ajax({
		url: "https://2018nianyun.yicuichina.com/api/yicui/v1",
		type: "post",
		async: false,
		data: JSON.stringify({
			"type": "wxOpenId",
			"wxOpenId": openid
		}),
		contentType: "application/json; charset=utf-8",
		dataType: "json",
		success: function (data) {
			datas = data;
			$("#user1").html(template("tpl1", datas));
		},
		error: function (e) {
		}
	})
	$("#user2").html(template("tpl2", datas));
	/*生成canvas图形*/
	var shareContent = document.getElementById("more2");//需要截图的包裹的（原生的）DOM 对象
	var width = shareContent.offsetWidth; //获取dom 宽度
	var height = shareContent.offsetHeight; //获取dom 高度
	var canvas = document.createElement("canvas"); //创建一个canvas节点
	var scale = 2; //定义任意放大倍数 支持小数
	var base64 = "";
	canvas.width = width * scale; //定义canvas 宽度 * 缩放
	canvas.height = height * scale; //定义canvas高度 *缩放
	canvas.getContext("2d").scale(scale, scale); //获取context,设置scale 
	var opts = {
		scale: scale, // 添加的scale 参数
		canvas: canvas, //自定义 canvas
		logging: true, //日志开关
		width: width, //dom 原始宽度
		height: height //dom 原始高度
	};
	html2canvas(shareContent, opts).then(function (canvas) {
		var img = Canvas2Image.convertToImage(canvas, canvas.width, canvas.height);
		base64 = img.src;
	});
	// 点击显示弹出框
	var savebtn = document.getElementById("savebtn");
	savebtn.onclick = function () {
		document.getElementById("box").style.display = "block";
		document.getElementById("end").src = base64;
	}
	// 点击关闭弹出框
	var box = document.getElementById("box");
	box.onclick = function () {
		document.getElementById('box').style.display = "none";
	}
})
// 对应跳转艺萃文章详情页
var jump = document.getElementById("jump");
var obj = {
	0: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005031&idx=1&sn=2831ef9a7844b6f3510662207c563d0d&chksm=7cbeaccf4bc925d92b853e5e07094ab513d37cfcbb82500f5d959603b1922581b33629144536#rd",
	1: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005029&idx=1&sn=f81c69979b54c3a96f3fc5f86b019485&chksm=7cbeaccd4bc925db5e2ad6b8b60bb30aad58f4ef036b7ba783c795e2fb7a7bdc2d5c168fe512#rd",
	2: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005034&idx=1&sn=74d4a7e63158c33ffe69654ad5e83e93&chksm=7cbeacc24bc925d41be4489a2097844cb55e29e607a984a6259a97af8799ab938032ce121af6#rd",
	3: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005033&idx=1&sn=81b1ff2f4b67b31d10ef3c056b96b6c6&chksm=7cbeacc14bc925d7ebb780d7ca6973bfb728fcd795a31c188de733d18a17a74671cd2e5ad3f7#rd",
	4: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005032&idx=1&sn=6d945c3e6be118b913be24a640eef2a6&chksm=7cbeacc04bc925d6220dc7aaef979d2c9a52bbeeb286d0c2960421b4f92c971ee2bfb8897059#rd",
	5: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005030&idx=1&sn=e3e1ff11f3a660557f460f723b996ad8&chksm=7cbeacce4bc925d8ceab2990233f12bd7873b472e835bf1e5a971b0cf1462b09a28b961591ca#rd",
	6: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005035&idx=1&sn=29e8aa1b7e284f5a14a5e0d654852c9b&chksm=7cbeacc34bc925d5fa8250fef32ff935d51cb01a5dfe00feec8b2a8ca8ed947f0f35e0e30d69#rd",
	7: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005028&idx=1&sn=fbe2aa3706e24e00e9bf58318b18edf6&chksm=7cbeaccc4bc925da2c7bb72dcd884f7f56e28273ad08395f61c91c3a1001f0cff8bad9536b71#rd",
	8: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005027&idx=1&sn=b2bb263505d9012cc6a564ce4032434a&chksm=7cbeaccb4bc925dd01b60b9a0256aab915bce4059f99d16914bed534c49dfdf202886392682c#rd",
	9: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005026&idx=1&sn=1792e53df791fd91ec97c5f6054741d4&chksm=7cbeacca4bc925dc2c4a21458280e2448fcf3bd0adbe2a521cfcd2ca943cd89dbb8901a9af82#rd",
	10: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005025&idx=1&sn=0ce28bfe81d401d0b6d8127312e9457f&chksm=7cbeacc94bc925dfae98ba5ae5214b7fcb6a6f1c1a218e80a043dcea9c65ff892adc356ac2ac#rd",
	11: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005024&idx=1&sn=9384e0cc50b3bad4c6939546d2ba3142&chksm=7cbeacc84bc925de231c4057aa3a0f271cd04f8acfef27873a7137b9d536223882f0efab29db#rd",
	12: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005023&idx=1&sn=1d6462774769d5d8f9e60fef50eb5262&chksm=7cbeacf74bc925e1d0d1d213c4869f999ebebd1560c274513df35a5088c6f8d4b6bb9c23b3b1#rd",
	13: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005022&idx=1&sn=65cf5e17540c22c2e55bafbdbf236764&chksm=7cbeacf64bc925e03129c6f8b8e58ab6953f294ca6c3ea06f2dafdbce4d3de3c957f0adad869#rd",
	14: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005021&idx=1&sn=3b4d4e3a922fc991ca32ffef59621bcd&chksm=7cbeacf54bc925e3f259b6f6ecdc01abee1b61066535cd35ffdc86eda801790989a0ad539012#rd",
	15: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005020&idx=1&sn=fb8b3d50601b5fb1a6efb7eaa21a620a&chksm=7cbeacf44bc925e2a18bd805f278f3046b2c9cb5c5bca763f6378f1fe8952d3a3188833a3eff#rd",
	16: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005019&idx=1&sn=6ba371be165c8399086fb9a68ba572ad&chksm=7cbeacf34bc925e5e259b9450cfc7b58f441061b7d4aae65d8007a3b122ac0c625fbcb8d22c0#rd",
	17: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005018&idx=1&sn=33ba84d6982e8f8959af5b6757bd3da0&chksm=7cbeacf24bc925e4e751e9b24b0ed8db395d5923337ccc89363ef435a32cf11e53526ceb977b#rd",
	18: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005017&idx=1&sn=01498daeab404628caa39515bc2f1176&chksm=7cbeacf14bc925e7b619ac0256f8907d370174380da522d3e0e6b11b6654a79746a7e0cfcb13#rd",
	19: "http://mp.weixin.qq.com/s?__biz=MzU2NTE2MjI0Nw==&mid=100005015&idx=1&sn=986024e8b4237aa299b4da5e179e06ea&chksm=7cbeacff4bc925e9be89137c3600d82f67ba3811182f519b26e8eae48909cdd4c7d7171556fc#rd"
}
jump.onclick = function () {
	location.href = obj[random];
}
// 阻止页面后退
window.history.forward(1);