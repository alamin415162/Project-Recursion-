const fibonacci = function(n) {
    console.log("print it out")
    const arr = []
    if(n === 1 || n === 0){
        return n;
    }
    else{
        
        return fibonacci(n - 1) + fibonacci(n - 2)
    }
}


const fibonacciIterate = function(n){
    const arr = []
    arr[0] = 0
    arr[1] = 1
    let k = n - 2
    for(let i = 0; i < k; i++){
        arr[i + 2] = arr[i] + arr[i + 1]
    }
    return arr
}

