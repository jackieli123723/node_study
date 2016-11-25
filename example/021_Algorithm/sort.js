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
    if (arr.length <= 1) { return arr; }//�ˬd�Ʋժ������ӼơA�p�G�p�󵥩�1�A�N��^�C
    var pivotIndex = Math.floor(arr.length / 2);//
    var pivot = arr.splice(pivotIndex,1)[0];//���"���"�]pivot�^�A�ñN��P��Ʋդ����A
    var left = [];//�w�q��ӪżƲաA�ΨӦs��@���@�k����Ӥl��
    var right = [];
    for (var i = 0; i < arr.length; i++)//�M��ƲաA�p��"���"��������J���䪺�l���A�j���Ǫ�������J�k�䪺�l���C
    {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return quickSort(left).concat([pivot], quickSort(right));//�ϥλ��k���_���Ƴo�ӹL�{�A�N�i�H�o��Ƨǫ᪺�ƲաC
}

function shellSort(arr)
{
    var length=arr.length;
    var h=1;
    while(h<length/3)
    {
        h=3*h+1;//�]�m���j
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
    for(lim=len;lim>1;){//lim�����ժ���
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
        var temp = array[start];//temp�O�ڸ`�I����
        for (var j = 2 * start; j < max; j *= 2)
        {
            if (j < max && array[j] < array[j + 1])
            {  //���o���j�Ĥl���U��
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
        heapAdjust(array, i, array.length - 1); //�N�Ʋ�array�c�ئ��@�Ӥj����
    }
    for (i = array.length - 1; i >= 0; i--)
    {
        /*��ڸ`�I�洫�X�h*/
        var temp = array[i];
        array[i] = array[0];
        array[0] = temp;
        /*�l�U���Ʋ��~��c�ئ��j����*/
        heapAdjust(array, 0, i - 1);
    }
    return array;
}
