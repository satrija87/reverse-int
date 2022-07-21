module.exports = function reverse(n) {
    let str =String(Math.abs(n)).split('').reverse().join('');;
    return parseInt(str);
}

