/**
 * 檢查元素是否存在陣列
 *
 * @param value 要搜尋的元素
 * @param array 被搜尋的陣列
 * @param fromIndex 從指定索引位置開始搜尋
 * @return 在數組array中搜索指定的值value，並返回此索引，如果不存在，返回-1
*/
function inArray(value, array, fromIndex) {
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

function main(){
    console.log( inArray(3, [1,2,3])); // 2
    console.log( inArray(99, [1,2,3])); // -1
}
    
main();