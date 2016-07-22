var total = 0;


for (var n = 0; n < 1000; n = (n +1)){ 
    if ((n % 3) === 0) {
        total += n;
    }
    else if ((n % 5) === 0) {
        total += n;
    }
    else {
    }
}

console.log(total);