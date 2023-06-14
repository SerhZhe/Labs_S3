function mergeSort(arr){
    if(arr.length <= 1){
        return arr;
    }

    let left = [];
    let right = [];
    for(let i = 0;i < arr.length; i++){
        if(i < arr.length/2){
            left.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }

    left = mergeSort(left);
    right = mergeSort(right);
    return merge(left, right);
}

function merge(left, right){
    let result = [];

    while(left.length != 0 && right.length != 0){
        if(left[0] <= right[0]){
            result.push(left[0]);
            left.shift();
        }else{
            result.push(right[0]);
            right.shift();
        }
    }

    while(left.length != 0){
        result.push(left[0]);
        left.shift();
    }
    while(right.length != 0){
        result.push(right[0]);
        right.shift();
    }
    return result
}

let arr = [5,2,90,3,7,14,91,32];
console.log(mergeSort(arr));