import Hashes from 'jshashes'
import {print} from '../../../src/lib/fingerprint/canvasPrint'

function IPBlock() {
    this.ip = 1;
}

IPBlock.prototype.add = function () {
    this.ip = 255 === this.ip ? false : this.ip + 1;
    return this.ip;
}
IPBlock.prototype.reSet = function () {
    this.ip = 1;
}
IPBlock.prototype.getValue = function () {
    return '' + this.ip
}

const b1 = new IPBlock(),
    b2 = new IPBlock(),
    b3 = new IPBlock(),
    b4 = new IPBlock(),
    list = {},
    hashes = new Hashes.SHA1();

while(b1.getValue()){
    const ip = '' + b1.getValue() + '.' + b2.getValue() + '.' + b3.getValue() + '.' + b4.getValue();
    const finger = hashes.hex(print(ip));
    let checkIp;
    if(checkIp = list[finger]){
        console.log('Error ip: ', ip, '-' , checkIp , '. finger: ', finger);
        break;
    }else{
        list[finger] = ip;
        console.log('ip: ', ip, '. finger: ', finger);
    }
    !b4.add() && !(()=>{
        b4.reSet();
        return b3.add();
    })() && !(()=>{
        b3.reSet();
        return b2.add();
    })() && !(()=>{
        b2.reSet();
        return b1.add();
    })()
}