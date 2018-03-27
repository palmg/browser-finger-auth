/**
 * 指纹认证工具。
 *
 * 执行过程：
 * 1. browser -> server  :握手
 * 2. server  -> browser :返回客户端ip地址或者其他识别参数（一个字符串）
 * 3. browser -> server  :返回指纹
 *    1) server根据指纹查询用户对应的公钥，并确认当前在服务端的可登陆状态，
 *    4) 若公钥不存在终止执行。返回一个EOF标记
 *    3) 若未登陆和不可登陆，终止执行。返回一个EOF标记
 *    2) 公钥存在并且可登陆，执行步骤4。
 * 4. server  -> browser : 用PK加密随机数串。（如果需要更强的加密安全，可以2个随机数，一个用于一次一密，一个用于认证）
 * 5. browser -> server  : 用私钥还原随机数。并返回给server。
 * 6. server  -> browser  :完成认证或认证失败。
 * @param {object} options{
 *    preprocessor:{
 *       fetch:function(url, callback) callback = function(result){//一个用于生成指纹的加盐字符串}。
 *    }
 * }
 * @constructor
 */
const FingerAuth = function (options) {
    const member = {
        url: options.url,
        preprocessor: options.preprocessor
    };
    this.setUrl = function (_url) {
        member.url = _url;
        return this;
    };
    this.getUrl = function () {
        return member.url;
    }
    this.getPreprocessor = function () {
        return member.preprocessor
    }
};
FingerAuth.prototype.process = function () {
    const preprocessor = this.getPreprocessor();
    preprocessor.fetch ? preprocessor.fetch(this.getUrl(), this.fetchCallback): fingerFetch(url, this.fetchCallback)
};


FingerAuth.getInstance = function () {
    return new FingerAuth();
};

//private
const fingerFetch = function (url, callback) {
    fetch(url).then(function(res){
    });
}

module.exports = FingerAuth;