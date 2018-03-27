fetch('https://file.mahoooo.com/res/file/20170901415215747O1H7C6Y3IWPDDBNKF32804758F4067C89A696D5C7020C3C4B061').then(function(res){console.log(res)});

/*import Rsa from './lib/rsa'
import {print} from './lib/fingerprint/canvasPrint'
import {hex2dec} from './lib/util/hex2dec'
import Fingerprint2 from 'fingerprintjs2'
import Hashes from 'jshashes'
import {get} from './lib/fingerprint'*/

/*const BigInteger = require('jsbn').BigInteger
const rsa = Rsa.getInstance();
rsa.generateKey('1231231231232312912897312678312','9128973126783126575677645667765','6575677645667765');

//签名
(()=>{
    const text = '123456789';
    console.log("Text :", text.toString());
    const cipher = rsa.skCrypt(text);
    console.log("Cipher :", cipher);
    const plain = rsa.pkCrypt(cipher);
    console.log("Plain :", plain);
})();

//认证
(()=>{
    const text = '987654321a';
    console.log("Text :", text.toString());
    const cipher = rsa.pkCrypt(text);
    console.log("Cipher :", cipher);
    const plain = rsa.skCrypt(cipher);
    console.log("Plain :", plain);
})();*/

//0240108049034
//01260350244034
//0128098098018

/*let list = {}
for(let i = 1; i < 256; i++){
    const ip = '192.168.1.' + i;
    const result = print(ip);
    const hasData = list[result];

    if(hasData !== null){
        list[result] = ip;
    }else{
        console.log('ip: ', ip, '. result: ', result);
        break;
    }

}


const result = new Hashes.SHA1().hex(print('abcdefghijklmnopqrstdsgdsfgdsgasdfsdfafdasdfaadfasdfsadfs1123123'));
console.log(0 === result.length % 2)
const len = result.length / 2;

let dec = '';
for (let pos = 0; pos < result.length; pos = pos + 2) {
    const s = result.substr(pos, 2);
    const value = parseInt(s, 16)
    dec += value;
}

console.log(dec)
2635bca8d41ba7524b68b6c9f001d838058d47b8
9df3988c6c478fc8c2e4698167f3b7c3edbdaf15

console.log((new Hashes.SHA1().hex(print(result))))*/

/*
const hashes = new Hashes.SHA1();
get({ip: '192.168.1.14'}, function (finger, resource) {
    console.log(finger)
    console.log(resource)
    let canvas, webGL, userAgent;
    resource.forEach(i => {
        if ('canvas' === i.key) {
            canvas = hex2dec(hashes.hex(i.value));
            console.log('Canvas: ', canvas)
        } else if ('webgl' === i.key) {
            webGL = hex2dec(hashes.hex(i.value));
            console.log('WebGL ', webGL)
        } else if ('user_agent' === i.key) {
            userAgent = hex2dec(hashes.hex(i.value));
            console.log('User Agent: ', userAgent);
        }
    })
    const rsa = Rsa.getInstance();
    rsa.generateKey(canvas, webGL, userAgent);
    //签名
    (() => {
        const text = '123456789';
        console.log("Text :", text.toString());
        const cipher = rsa.skCrypt(text);
        console.log("Cipher :", cipher);
        const plain = rsa.pkCrypt(cipher);
        console.log("Plain :", plain);
    })();
    //认证
    (() => {
        const text = '987654321';
        console.log("Text :", text.toString());
        const cipher = rsa.pkCrypt(text);
        console.log("Cipher :", cipher);
        const plain = rsa.skCrypt(cipher);
        console.log("Plain :", plain);
    })();
})*/
