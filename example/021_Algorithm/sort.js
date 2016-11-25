function bubbleSort(array){
    for(var i = 0; i < array.length; i++)
    {
        var isSort = true;
        for(var j = 0; j < array.length - 1 - i; j++)
        {
            if(array[j] > array[j+1])
            {
                isSort = false;
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
        if(isSort)
        {
            break;
        }
    }
    return array;
}
    
function selectionSort(array){
    for(var i = 0; i < array.length - 1; i++)
    {
        var pos = i;
        for(var j = i + 1; j < array.length;j++)
        {
            if(array[j] < array[pos])
            {
                pos=j;
            }
        }
        var temp=array[i];
        array[i]=array[pos];
        array[pos]=temp;
    }
    return array;
}
    
function insertionSort(array){
    for(var j = 0;j < array.length;j++) {
        var key = array[j];
        var i = j - 1;
        while (i > -1 && array[i] > key)
        {
            array[i + 1] = array[i];
            i = i - 1;
        }
        array[i + 1] = key;
    }
    return array;
}

function quickSort(arr) {
    if (arr.length <= 1) { return arr; }//檢查數組的元素個數，如果小於等於1，就返回。
    var pivotIndex = Math.floor(arr.length / 2);//
    var pivot = arr.splice(pivotIndex,1)[0];//選擇"基準"（pivot），並將其與原數組分離，
    var left = [];//定義兩個空數組，用來存放一左一右的兩個子集
    var right = [];
    for (var i = 0; i < arr.length; i++)//遍曆數組，小於"基準"的元素放入左邊的子集，大於基準的元素放入右邊的子集。
    {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));//使用遞歸不斷重複這個過程，就可以得到排序後的數組。
}

function shellSort(arr)
{
    var length=arr.length;
    var h=1;
    while(h<length/3)
    {
        h=3*h+1;//設置間隔
    }
    while(h>=1)
    {
        for(var i=h; i<length; i++)
        {
            for(var j=i; j>=h && arr[j]<arr[j-h]; j-=h)
            {
                var temp =arr[j-h];
                arr[j-h]=arr[j];
                arr[j]=temp;
            }
        }
        h=(h-1)/3;
    }
    return arr;
}


function mergeSort(arr){
        
    function merge(left,right){
        function isArray1(arr){
           if(Object.prototype.toString.call(arr) =='[object Array]'){
               return true;
           }else{
               return false;
           }
        }
        
        var result=[];
        if(!isArray1(left)){
            left = [left];
        }
        if(!isArray1(right)){
            right = [right];
        }
        while(left.length > 0&& right.length >0){
            if(left[0]<right[0]){
                result.push(left.shift());
            }else{
                result.push(right.shift());
            }
        }
        return result.concat(left).concat(right);
    }
    var len=arr.length;
    var lim ,work=[];
    var i,j,k;
    if(len ==1){
        return arr;
    }
    for(i=0;i<len;i++){
        work.push(arr[i]);
    }
    work.push([]);
    for(lim=len;lim>1;){//lim為分組長度
        for(j=0,k=0;k<lim;j++,k=k+2){
            work[j]=merge(work[k],work[k+1]);
        }
        work[j]=[];
        lim=Math.floor((lim+1)/2);
    }
    return work[0];
}

function heapSort(array){
        
    function heapAdjust(array, start, max){
        var temp = array[start];//temp是根節點的值
        for (var j = 2 * start; j < max; j *= 2)
        {
            if (j < max && array[j] < array[j + 1])
            {  //取得較大孩子的下標
                ++j;
            }
            if (temp >= array[j])
                break;
            array[start] = array[j];
            start = j;
        }
        array[start] = temp;
    }
    for (var i = Math.floor(array.length / 2); i >= 0; i--)
    {
        heapAdjust(array, i, array.length - 1); //將數組array構建成一個大頂堆
    }
    for (i = array.length - 1; i >= 0; i--)
    {
        /*把根節點交換出去*/
        var temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        /*餘下的數組繼續構建成大頂堆*/
        heapAdjust(array, 0, i - 1);
    }
    return array;
}
