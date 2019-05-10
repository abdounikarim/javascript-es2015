let aGreatNumer = 10;

if(true) {
   aGreatNumer = 42;
}

setTimeout(() => {
   console.log(aGreatNumer);
}, 1000);

console.log('waiting...');