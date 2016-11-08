module.exports.inArray = function (value, array, fromIndex) {
    var d;
    var indexOf = [].indexOf;
    if (array) {
        if (!indexOf){
            return indexOf.call(array, value, fromIndex);
        }
        for (d = array.length, fromIndex = fromIndex ? 0 > fromIndex ? Math.max(0, d + fromIndex) : fromIndex : 0; d > fromIndex; fromIndex++) {
            if (fromIndex in array && array[fromIndex] === value) {
                return fromIndex;
            }
        }
    }
    return -1;
}

module.exports.random = function(arr) {
    return arr.sort(() => {
        return Math.random() - 0.5
    });
};

module.exports.remove = function(arr, el) {
    for(var i=arr.length-1;i>=0;--i){
        if(arr[i] == el){
            arr.splice(i, 1);
        }
    }
    return true;
};

module.exports.max = function(arr){
    // Math.max.apply(Math, arr );

    return Math.max( ...arr );
};
module.exports.min = function(arr){
    // Math.min.apply(Math, arr );

    return Math.min( ...arr );
};

// 清空陣列
module.exports.clear = function(arr){
    arr.length = 0;
};

// 完整深層複製一份陣列
module.exports.clone = function(a){
    if (a.length === 1) return [a[0]];
    else return Array.apply(null, a)
};

// 去除重複
module.exports.unique = function(a){
    let arr = [];
    let obj = {};
    for(let i = 0,c=a.length; i < c; ++i){
        if(!obj[this[i]]){
            arr.push(this[i]);
            obj[this[i]] = 1;
        }
    }
    return arr;
};