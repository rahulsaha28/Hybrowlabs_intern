// convert the string to array object
module.exports.StringToArrayConvert = (str)=>{
    let arr = str.split('\n').slice(0,-1).map(item=>({...JSON.parse(item)}));
    return arr;
}
