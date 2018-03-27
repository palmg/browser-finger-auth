/**
 * Rsa相关全局配置
 */

const BigInteger = require('jsbn').BigInteger
/**
 * 生成种子的最大长度
 * @type {*|number}
 * @private
 */
let Config_SeedLen = new BigInteger('2').pow(new BigInteger('128')),
    /**
     * 密钥或加密数据的最大长度，n的边界
     * @type {*|number}
     */
    Config_KeyLen = new BigInteger('2').pow(new BigInteger('256')),
    /**
     * millerRabin算法的检查次数
     * @type {number}
     */
    Config_millerRabinCheckTimes = 1500,
    //算法执行步进
    Config_Step = new BigInteger('1');

/**
 * 设置生成密钥的种子位长度（2^length）。
 * 种子长度也会影响到密钥长度n，通常情况下会将n=2*种子长度。
 * 默认种子长度为128。
 * @param length
 */
export const setSeedLength = function (length) {
    Config_SeedLen = new BigInteger(2).pow(new BigInteger('' + length));
    Config_KeyLen = new BigInteger(2).pow(new BigInteger('' + (2*parseInt(length))));
}

export const getSeedLength = function () {
    return Config_SeedLen
}

export const getKeyLength = function () {
    return Config_KeyLen
}

/**
 * 设置素性检测算法MillerRabin的检测次数，通常单次错误的概率为1/4,多次验证的递减为4^-n。
 * @param times
 */
export const setMillerRabinCheckTimes = function(times){
    Config_millerRabinCheckTimes = times;
}

export const getMillerRabinCheckTimes = function(){
    return Config_millerRabinCheckTimes;
}
export const getStep = function () {
    return Config_Step;
}