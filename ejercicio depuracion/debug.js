function fibo(num){
    let a = 1;
    let b = 0;
    let fibo;
    for(let i = 0; i < num; i++){
        fibo = a + b;
        b = a;
        a = fibo;
    }
    return fibo;
}

console.log(fibo(5));