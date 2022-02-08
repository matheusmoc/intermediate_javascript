var output = [];
var count = 1;

function fizzbuzz() {
    if (count % 3 === 0) {
        output.push("Fizz");
    }else{
        output.push(count); // add var count in the array
    }
   
count++;
    console.log(output);
}