/**
 * �ˬd�����O�_�s�b�}�C
 *
 * @param value �n�j�M������
 * @param array �Q�j�M���}�C
 * @param fromIndex �q���w���ަ�m�}�l�j�M
 * @return �b�Ʋ�array���j�����w����value�A�ê�^�����ޡA�p�G���s�b�A��^-1
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