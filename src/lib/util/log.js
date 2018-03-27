const Config_ActiveLog = true;
export const info = function(...params){
    Config_ActiveLog && console.log(...params);
}