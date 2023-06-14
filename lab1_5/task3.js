function fibonaci(n){
    let n1 = 1, n2 = 1, nextTerm;
    for (let i = 0; i < n; i++) {
        console.log(n1);
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
}

console.log(fibonaci(10))