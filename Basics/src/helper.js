function generateTicket(n){
    let arr = new Array(n)
    for(let i = 0; i < n; i++ ){
        arr[i] = Math.floor(Math.random() * 10);
    }
    return arr;
}

function checkTicket(arr){
    let sum = 0;
    arr.map((i) => {
        sum += i;
    })
    return sum;
}

export {generateTicket, checkTicket};