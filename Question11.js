let rev = 0
let num = 971
while(num > 0)
{
  let rem = num % 10
  rev = (rev * 10)+ rem
  num = Math.floor(num / 10)
}
console.log(rev)