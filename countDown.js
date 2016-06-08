/**
 * [countDown description]
 * $对象的flag属性即是flag，就不用污染全局对象了
 * @param  {[obj]} el       [需要绑定的dom元素]
 * @param  {[num]} leftTime [总共需要倒计的时间]
 * @return {[type]}          [无]
 */
var $ = {
    flag: 1,
    countDown: function countDown(el, leftTime) {
        if ($.flag) {
            $.flag = 0;
            el.innerHTML = '等待' + leftTime + 'S';
            var countDownIntervalId = setInterval(function() {
                leftTime = leftTime - 1;
                el.innerHTML = '等待' + leftTime + 'S';
                if (leftTime == 0) {
                    clearInterval(countDownIntervalId);
                    el.innerHTML = '获取验证码';
                    left = 60;
                    $.flag = 1;
                }
            }, 1000);
        }
    }
};