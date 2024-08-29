module.exports = function reverse (n) {
  
    let str = n.toString();
    
    let reverseStr = str.split('').reverse().join('');
    
    // Convert the reversed string back to a number
    return parseInt(reverseStr, 10);
}

