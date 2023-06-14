function deleteSame(arr){
    return [...new Set(arr)];
}

let arr = ["ab","ab","cc","bc","cc","ab"];
console.log(deleteSame(arr))