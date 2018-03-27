import {canvasFinger} from './canvasPrint'
import Fingerprint2 from 'fingerprintjs2'
let isInit = false, configs, fingerData, resources;
/**
 *
 * @param {object} options {
 *    ip:
 * } 防止数据突变
 * @param callback
 */
export const get = function(options, callback){
    if(isInit && configs === options){
        callback(fingerData, resources)
    }else{
        new Fingerprint2({
            preprocessor:function (key, value) {
                if('canvas' === key){
                    return canvasFinger(options.ip);
                }else{
                    return value;
                }
            }
        }).get(function (result, components) {
            fingerData = result;
            resources = components;
            isInit = true;
            configs = options;
            callback(fingerData, resources)
        })
    }
}