// solutions to the exercises mentioned in the readme should be in this file.

// larger number
function integer(a,b) {


    if( a < b)
		return  b;
    else 
       return a;

}
console.log("The larger number is" + integer(78,8));

// iteration of odd / even numbers

for (var x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x +  " is even");
    }
    else if (x % 2 === 0) {
        console.log(x + " is even");   
    }
    else {
        console.log(x + " is odd");
    }
}

// sum of multiples of 3 and 5

let sum = 0;

function sumMultiple(a) {

        for (i = 1; i < a; i++) {
                if ((i % 3 === 0) || (i % 5 === 0) || (i % 3 === 0 && i % 5 === 0)) {
                        sum = sum + i;
                }
        }

        return sum;
}

console.log(sumMultiple(1000));


// assign grade

function assignGrade(score) {
        if (score > 90) {
                return 'A';
        } else if (score > 85) {
                return 'B';
        } else if (score > 75) {
                return 'C';
        } else if (score > 55) {
                return 'D';
        } else {
                return 'F';
        }
}
console.log("your grade is "+ assignGrade(7));
console.log("your grade is " + assignGrade(97));
console.log("your grade is " + assignGrade(67));
console.log("your grade is " + assignGrade(77));
console.log("your grade is " + assignGrade(97));
console.log("your grade is " + assignGrade(67));
console.log("your grade is " + assignGrade(87));

// logging every value from 60

for (var i = 60; i <= 100; i++) {
        console.log('For ' + i + ', you got a ' + assignGrade(i));
}