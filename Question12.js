var n = 23;
while (n !== 1) {
    console.log(n);
    let total = 0
    while (n > 0) {
        let digit = n % 10;
        total += digit ** 2;
        n = Math.floor(n / 10);
    }
    n = total;
}
console.log(n); 
