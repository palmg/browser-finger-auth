import GenKey from './key'
const BigInteger = require('jsbn').BigInteger

function Rsa(){
    this.key = new GenKey();
    this.isKeyExists = false;
}
Rsa.getInstance = function () {
    return new Rsa()
}
Rsa.prototype.exportKey = function () {
    return {
        sk: this.key.getSK(),
        pk: this.key.getPK(),
        timestamp: this.key.getTimestamp()
    }
}
Rsa.prototype.importKey = function (structure) {
    const key = this.key;
    key.setSK(structure.sk);
    key.setPK(structure.pk);
    key.setTimestamp(structure.timestamp);
}

Rsa.prototype.generateKey = function(seedP, seedQ, seedE){
    this.key.generate(seedP, seedQ, seedE);
    this.isKeyExists = true;
}

Rsa.prototype.skCrypt = function(input){
    const iText = new BigInteger(input), sk = this.key.getSK();
    return iText.modPow(sk.e, sk.n).toString();
}

Rsa.prototype.pkCrypt = function (input) {
    const iText = new BigInteger(input), pk = this.key.getPK();
    return iText.modPow(pk.d, pk.n).toString();
}


export default Rsa