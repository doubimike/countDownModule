/**
 * [countDown description]
 * $对象的flag属性即是flag，就不用污染全局对象了，现在只支持onclick，不支持addeventlistener。
 * @param  {[obj]} el       [需要绑定的dom元素]
 * @param  {[num]} leftTime [总共需要倒计的时间]
 * @return {[type]}          [无]
 */

function CountDown() {
    this.flag = 1;
}

CountDown.prototype.countDown = function(el, leftTime) {
    var _left = leftTime;
    if (this.flag) {
        this.flag = 0;
        el.onclick = function() {
            return false;
        };
        el.innerHTML = '等待' + leftTime + 'S';
        var countDownIntervalId = setInterval(function() {
            leftTime = leftTime - 1;
            el.innerHTML = '等待' + leftTime + 'S';
            if (leftTime == 0) {
                clearInterval(countDownIntervalId);
                el.innerHTML = '获取验证码';
                leftTime = _left;
                this.flag = 1;
                el.onclick = function() {
                    new CountDown().countDown(el, leftTime);
                };
            }
        }, 1000);
    }
};
