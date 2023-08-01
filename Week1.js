function findsum(a,b)

startNumber = 500;
stepDownNumber = 17;
endNumber = 3;
currentNumber = startNumber;
sum = 0;


for ( ; currentNumber > 3; ) {
    currentNumber -= stepDownNumber;
    sum += currentNumber;
}
console.log(sum);

