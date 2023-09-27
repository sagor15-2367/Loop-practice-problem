var numbers = [45, 22, 24, 26, 61, 84, 55,23];
for (var i = 0; i < numbers.length; i++){
 var number = numbers[i];
 if(number>50){
    continue;
 }
 console.log(number);
}