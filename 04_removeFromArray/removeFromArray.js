const removeFromArray = function(srcArray, ...toBeRemoved) {
    for (let i = 0; i < srcArray.length; i++) {
        while (toBeRemoved.includes(srcArray[i])) {
            srcArray.splice(i, 1);
        }
    }
    return srcArray;
};
removeFromArray([1,2,3,4], 3);
// Do not edit below this line
module.exports = removeFromArray;
