// 福袋雨
$(function () {
    //返回个2000到5000之间的随机数为福袋降落速度
  function getNum1() {
    return Math.floor(Math.random() * 4800) + 5100;
  }
  function getNum2() {
    return Math.floor(Math.random() * 5800) + 6300;
  }
  function getNum3() {
    return Math.floor(Math.random() * 6800) + 7800;
  }
  function abc() {
    $(".blessing1").animate({ top: "500px" }, getNum1(), function () {
      flag_1 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing2").animate({ top: "550px" }, getNum2(), function () {
      flag_2 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing3").animate({ top: "550px" }, getNum3(), function () {
      flag_3 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing4").animate({ top: "550px" }, getNum1(), function () {
      flag_4 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing5").animate({ top: "550px" }, getNum2(), function () {
      flag_5 = true;
      $(this).css('top', '-70px');
    });
    $(".blessing6").animate({ top: "550px" }, getNum3(), function () {
      flag_6 = true;
      $(this).css('top', '-70px');
    });
  }
  abc();
  var time_1;
  var time_2;
  var time_3;
  var time_4;
  var time_5;
  var time_6;
  var flag_1 = false;
  var flag_2 = false;
  var flag_3 = false;
  var flag_4 = false;
  var flag_5 = false;
  var flag_6 = false;
  // 6个定时器
  clearInterval(time_1);
  time_1 = setInterval(function () {
    if (flag_1) {
      flag_1 = false;
      $(".blessing1").animate({ top: "550px" }, getNum1(), function () {
        flag_1 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 10)
  clearInterval(time_2);
  time_2 = setInterval(function () {
    if (flag_2) {
      flag_2 = false;
      $(".blessing2").animate({ top: "550px" }, getNum2(), function () {
        flag_2 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 10)
  clearInterval(time_3);
  time_3 = setInterval(function () {
    if (flag_3) {
      flag_3 = false;
      $(".blessing3").animate({ top: "550px" }, getNum3(), function () {
        flag_3 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 10)
  clearInterval(time_4);
  time_4 = setInterval(function () {
    if (flag_4) {
      flag_4 = false;
      $(".blessing4").animate({ top: "550px" }, getNum1(), function () {
        flag_4 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 10)
  clearInterval(time_5);
  time_5 = setInterval(function () {
    if (flag_5) {
      flag_5 = false;
      $(".blessing5").animate({ top: "550px" }, getNum2(), function () {
        flag_5 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 10)
  clearInterval(time_6);
  time_6 = setInterval(function () {
    if (flag_6) {
      flag_6 = false;
      $(".blessing6").animate({ top: "550px" }, getNum3(), function () {
        flag_6 = true;
        $(this).css('top', '-70px');
      });
    }
  }, 10)
});



// 点击任意一个福袋打开
$(function () {
  $('.showtime').find('.blessing').each(function () {
    $(this).click(function () {
      $('.black').show();
      $('.blessing8').show().addClass('open').siblings().hide();
      //显示有动画的第八个DIV，添加上有动画效果的类，从小变大，同时让其他DIV都隐藏
      setTimeout(function () {
        window.location.href = 'surprise.html';
        //将跳转时间写在延迟计时器里
      }, 1700)
      //延迟计时器的周期为动画的持续时间
      // 如果与CSS中的动画持续相同则在动画播放完立即跳转
      // 如果小于动画持续时间将在动画完成前跳转
      // 如果大于动画持续时间将在动画完成后一定时间再跳转
    })
  })
})
