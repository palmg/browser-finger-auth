export const hex2dec = function (hexStr) {
    let dec = '';
    for (let pos = 0; pos < hexStr.length; pos = pos + 2) {
        const s = hexStr.substr(pos, 2);
        dec += parseInt(s, 16)
    }
    return dec
};