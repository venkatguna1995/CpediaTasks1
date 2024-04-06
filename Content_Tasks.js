
// Task1
/* To exchange the values of two numbers without using Third variable and 
after exchange then Double of the values of two numbers.*/
// let a = 5
// let b = 10

//  a = b + a
//  b = a - b
//  a = a - b

//   console.log(a,b)

//   a += a
//   b += b

//   console.log(a,b)



//   Task2
/*Whenever the percentage is Entered, then the following conditions must be satisfied.
      a) Percentage between 40 to 50 => To print "Buy a pen."
      b) Percentage between 50 to 60 => To print "Buy a Book."
      c) Percentage between 60 to 70 => To print "Buy a Bag."
      d) Percentage between 70 to 80 => To print "Buy a Watch."
      e) Percentage between 80 to 90 => To print "Buy a Mobile."
      f) Percentage between 90 to 100 => To print "Buy an Laptop."
      g) otherwise => To print "Fail"*/

// const x = 80;

// switch(true) {
//     case (x >= 40 && x <= 50):
//         console.log("Buy A Pen")
//         break;
//     case (x > 50 && x <= 60):
//         console.log("Buy A Book")
//         break;
//     case (x > 60 && x <= 70):
//         console.log("Buy A Bag")
//         break;
//     case (x > 70 && x <= 80):
//         console.log("Buy A Watch")
//         break;
//     case (x > 80 && x <= 90):
//         console.log("Buy A Mobile")
//         break;
//     case (x > 90 && x <= 100):
//         console.log("Buy A Laptop")
//         break;
//     default:
//         console.log("Fail")
// };


// Task3

/*check if a number is an even or odd. then the following conditions must be satisfied.
     a) "given Number is Even and to print double of the number"
     b) "given Number is odd and to print adding by two" */   

// var EvenNumber
// var OddNumber

// function getValue(){
// let inputValue = document.getElementById("number").value
// inputValue = +inputValue
// if(inputValue % 2 == 0){
//     inputValue += inputValue
//     console.log(`Given Number Even Number, Given number Double Value ${inputValue}`)
//     EvenNumber = `Given Number Even Number, Given number Double Value ${inputValue}`
//     }else{
//         inputValue += 2
//         console.log(`Given Number Odd Number", "Adding 2 to Given Number ${inputValue}`)
//         OddNumber = `Given Number Odd Number", "Adding 2 to Given Number ${inputValue}`
//     }
// }

// Task4

/* Create a Simple Calculator using Conditions
Steps :
1. Ask the user to enter the first number.
2. Ask the user to enter the operation (+, -, *, /).
3. Ask the user to enter the second number.
4. Based on the operation entered:
5. If it's addition (+), add the two numbers together.
6. If it's subtraction (-), subtract the second number from the first number.
7. If it's multiplication (*), multiply the two numbers together.
8. If it's division (/), divide the first number by the second number.
9. Display the result of the operation. */



// function Calculate() {
//     let firstValue = document.getElementById("number").value
//     let operatorValue = document.getElementById("text").value
//     let secondValue = document.getElementById("number2").value
//     if (firstValue && operatorValue && secondValue) {
//         switch (true) {
//             case operatorValue == "+":
//                 let value1 = +firstValue + +secondValue
//                 console.log(`Addition value ${value1}`)
//                 break;
//             case operatorValue == "-":
//                 let value2 = firstValue - secondValue
//                 console.log(`Substaction value ${value2}`)
//                 break;
//             case operatorValue == "*":
//                 let value3 = firstValue * secondValue
//                 console.log(`Multiplication value ${value3}`)
//                 break;
//             case operatorValue == "/":
//                 let value4 = firstValue / secondValue
//                 console.log(`Divided value ${value4}`)
//                 break;
//             default:
//                 console.log("Please Enter the Correct value")
//         };
//     } else {
//         console.log("something went Wrong")
//     }
// }



// Task5
/*Write a program that uses a loop to calculate and display the sum of all numbers from 1 to 10.
Steps :

1. Start with a variable sum set to 0.
2. Start a loop from 1 to 10.
3. Add the current loop variable to sum.
4. After the loop, sum will hold the sum of all numbers from 1 to 10.
5. Display the sum in the format "1+2+3+...+10 = sum".*/


// let sum = 0
// for(i=1;i<=10;i++){
//     sum += i
// }
// console.log(`sum of all numbers ${sum}`)

// Task6
/*Write a program that uses a loop to calculate and display the factorial of a given number.

Steps:
1. We first define the given number as givenNumber.
2. Then, we initialize the factorial variable to 1.
3. Next, we use for loop to iterate from the givenNumber down to 1.
4. each iteration, we multiply the factorial by the current value of i.
5. After the loop, the factorial variable holds the calculated factorial value.
6. Finally, we display the calculated factorial value using console.log( ).

Example : Given number is 5;   
        5*4*3*2*1 = 120      */

// let i=10;
// let value = 1

// do{
//     value *= i
//     console.log(value)
//     i--
// }while(
//     i>0
// )

// console.log(`Given number factcorial : ${value}`)



// Task7
/*Write a program that uses a loop to print a multiplication table for a given Number up to a certain range.

Steps :
Step 1: Choose a number you want to create a multiplication table.
Step 2: Start counting from 1 up to a certain range (e.g., 10).
Step 3: For each number in the range, multiply it by the chosen number and write down the result.
Step 4: Repeat this process until you reach the desired range.

Example : Given Number is 5 
5 * 1 = 5
5 * 2 = 10
5 * 3 = 15
5 * 4 = 20
5 * 5= 25
5 * 6 = 30
5 * 7 = 35
5 * 8 = 40
5 * 9 = 45
5 * 10 = 50*/

// let x = 5

// for(i=1;i<=10;i++){
//     console.log(`${x}  *  ${i}  =  ${x*i}`)
// }

// Task8

/* Write a program that uses a loop to find and display the common elements between two arrays of integers.

Steps:
Step 1: Imagine you have two lists of numbers.
Step 2: Pick a number from the first list.
Step 3: Look at each number in the second list to see if it matches the number you picked.
Step 4: If you find a match, it means the number is common to both lists.
Step 5: Repeat steps 2-4 for each number in the first list.
Step 6: Once you've checked all numbers in the first list, you've found all the common elements.
Step 7: Display the common elements you found. */

// let list1 = [1,2,3,4,5,6,7,8,9,11,15,17,20]
// let list2 = [3,5,7,9,15,20]
// var commanValues = []
// for(let i=0; i<list1.length; i++){
//     for(let j=0;j<list2.length;j++){
//         // console.log("comman",list1[i],list2[j])
//         if(list1[i] == list2[j]){
//             // console.log(list1[i])
//             commanValues.push(list1[i])
//         }
//     }

// }

// console.log(commanValues)


// Task9
/*Write a program that uses a loop to check if a given number is prime or not.

Steps :
1. We start with the given number num (assumed as 17).
2. We assume initially that the number is prime (isPrime is set to true).
3. We check if the number is less than 2, which is a special case for prime numbers. If it is, we set isPrime to false.
4. If the number is greater than or equal to 2, we loop from 2 up to the square root of the number.
5. In each iteration, we check if the current number divides the given number evenly (with no remainder). If it does, we set isPrime to false and break out of the loop.
6. After the loop, we display the result indicating whether the number is prime or not. */

//  isPrime = true
//  function primeNum() {
//     let givenNumber = document.getElementById("prime").value
//  if(givenNumber < 2){
//     isPrime=false
//  }
//     if(givenNumber >=2){
//         for(i=2;i<givenNumber;i++){
//             if(givenNumber % i == 0){
//                 isPrime = false
//                 break;
//             }
//         }
//         if(isPrime){
//             console.log(`Given Number ${givenNumber} is prime number`)
//         }else{
//             console.log(`Given Number ${givenNumber} is not prime number`)
//         }
        
//     }
//     isPrime=true
//  }


// Task10

/*Write a program that uses a loop to reverse and display the elements of an array.

1. We start with the given array [1, 2, 3, 4, 5].
2. We initialize an empty array "reversedArray" to store the reversed elements.
3. We loop through each element of the original array in reverse order using a for loop 
4. starting from the last index (array.length - 1) down to 0.
5. Inside the loop, we add each element to the beginning of the "reversedArray" using the push() method.
6. After looping through all elements of the original array, 
we display the "reversedArray", which contains the elements of the original array in reverse order. */


// let array = [1,2,3,4,5]
// let reverseArray = []

// for(i=array.length-1; i >= 0; i--){
//     console.log(i)
//     reverseArray.push(array[i])
// }
// console.log(reverseArray)



// 4th Assignment Question
// function lfc(myname) {
//       console.log(10+lfc +12);
//      }
// res=lfc(10);
// console.log(res);

// 4th Assignment 
// var x=10;
//  y= --x+1;
// console.log(y);
// var x=10;
//  y= x-- + 1;
// console.log(y);

// let chaval= (p)=>p+2;
//        console.log(chaval(2));


// Task11
/*
Write a program that uses a loop to find and display the largest number in an array of integers.
Steps:
1. we have an array called numbers containing integers.
2. Start by assuming that the first number in the array is the largest one.
3. Iterate through the array starting from the second number.
4. For each number in the array, compare it with the current largest number.
5. If the current number is greater than the current largest number, update the largest number to be the current number.
6. After iterating through all numbers in the array, the largest number will be stored in a variable called max.
7. Display the value of max. */

// let data = [2,4,9,33,32,99,67,501]
// let LargeNumber = data[0]
//  for(let i=0;i<data.length;i++){
//       if(LargeNumber < data[i]){
//             LargeNumber = data[i]
//       }
//  }
//  console.log("LargeNumber",LargeNumber)


// Task12

/* Given an array of objects representing users, update the age of a user with a specific ID.
const users = [
  { id: 1, name: "A", age: 25 },
  { id: 2, name: "B", age: 30 },
  { id: 3, name: "C", age: 22 }
];
Steps :
1. We start with the given array of user objects users.
2. We specify the "userIdToUpdate" variable to store the ID of the user we want to update
3. We loop through each user object in the array and check if the id property matches the "userIdToUpdate"
4. If a user with the specified ID is found, we update its age property to the new age (Example: 35).
5. If no user with the specified ID is found, we display a message indicating that the user does not exist
6. Finally, we display the updated array of user objects  */

// const users = [
//       { id: 1, name: "A", age: 25 },
//       { id: 2, name: "B", age: 30 },
//       { id: 3, name: "C", age: 22 }
//     ];

//     let existingId = 1
//     let updateValue = 5
// for(let item of users){
//       if (item.id == existingId){
//             item.id = updateValue
//       }
// }
// console.log(users)

// Task13

/* Write a code on Fibonacci Series using Function.

Steps:
Step 1: Begin with two numbers, 0 and 1, which are the starting numbers of the Fibonacci sequence.
Step 2: Print the first number, which is 0.
Step 3: Repeat the following steps for the desired number of terms:
Step 3.1: Add the two previous numbers to get the next number in the sequence.
Step 3.2: Update the first number to the second number's value.
Step 3.3: Update the second number to the newly calculated number.
Step 3.4: Print the updated first number, which is the next number in the Fibonacci sequence.*/


// let givenNumber = 10 
// let number1 = 0
// let number2 = 1
// let number3 
// let fibSeries = []

// for(let i=0;i<givenNumber;i++){
//       number3 =  number1 +number2
//       number1 = number2
//       number2 = number3
//       fibSeries.push(number1)
// }
// console.log(fibSeries)


// Task14
/*
Write a function called "isPalindrome" that takes a string as an argument and returns true if the string is a palindrome and false otherwise.
Note : Palindrome means reads the same backward as forward.
Steps:
1. We define a function isPalindrome that takes a string str as input.
2. Inside the function, we initialize variables start and end to represent the start and end indices of the string.
3. We use a while loop to iterate through the string while the start index is less than the end index.
4. Inside the loop, we compare characters at the start and end.
5. If the characters are not the same, we return false, indicating that the string is not a palindrome.
6. If all characters are the same and the loop completes without returning false, we return true, indicating that the string is a palindrome.
7. We test the function with example strings to verify. */

// let reversData = ""
// function ispalindrome(strng){
//   for(i=strng.length-1;i>=0;i--){
//     console.log(i)
//     reversData += strng[i]
//   }
//   if(strng == reversData){
//     console.log("Given String Isplaindrome")
//   }else{
//     console.log("Given String not Isplaindrome")
//   }
// }

// console.log(ispalindrome("isisi"))










