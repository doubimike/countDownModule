/**
 * [countDown description]
 * $对象的flag属性即是flag，就不用污染全局对象了，现在只支持onclick，不支持addeventlistener。从对象的写法改成构造函数的写法。解决一个页面只能绑定一个构造器的问题。
 * @param  {[obj]} el       [需要绑定的dom元素]
 * @param  {[num]} leftTime [总共需要倒计的时间]
 * @return {[type]}          [无]
 */

var CountDown = {
    countDown: function(el, leftTime) {
        // 把初始的倒计时缓存下来，最后重置用。
        var _left = leftTime;

        el.onclick = function() {
            return false;
        };

        el.innerHTML = '等待' + leftTime + 'S';
        var countDownIntervalId = setInterval(function() {
            leftTime -= 1;
            el.innerHTML = '等待' + leftTime + 'S';
            if (leftTime === 0) {
                clearInterval(countDownIntervalId);
                el.innerHTML = '获取验证码';
                leftTime = _left;
                el.onclick = function() {
                    CountDown.countDown(el, leftTime);
                };
            }
        }, 1000);
    }
};
