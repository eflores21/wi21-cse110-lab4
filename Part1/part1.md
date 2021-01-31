1. What will happen at line 11 and why?
   1. Var has no block scope, so console.log will print out the final value that i iterated to from the for loop
2. What will happen at line 12 and why?
   1.  Var has no block scope, so console.log will print out the variable discountedPrice with the last value that was set inside of the previous for loop
3.  What will happen at line 13 and why?
    1.  Var has no block scope, so console.log will print out the variable finalPrice with the last value that was set inside of the previous for loop
4.  What will the function return if we call discountPrices([100,200,300],5)?
    1.  it will return the values [50,100,150], the function will discount each of the original values by half.
5.  What will happen at line 11 and why?
    1.  Let has a block scope, and this was declared inside of a for loop, since we are trying to print outside of this block, this will give an "i is no defined" error.
6.  What will happen at line 12 and why?
    1.  Let has a block scope, and this was declared inside of a for loop, since we are trying to print outside of this block, this will give an "discountedPrice is not defined" error.
7.  What will happen at line 13 and why?
    1.  Let has a block scope, and this was declared outside of the for loop, since we are trying to print inside of its block, it will print out the value set inside of the for loop
8.  What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    1.  Assuming all of the previous console.log prints work, this will return the values [50,100,150] as discounted was declared outside of the for loop and so it will retain the updated value from the for loop.
9.  What will happen at line 11 and why?
    1.  Let has a block scope, and this was declared inside of a for loop, since we are trying to print outside of this block, this will give an "i is no defined" error.
10. What will happen at line 12 and why?
    1.  const has a block scope, and this was declared inside of a for loop, since we are trying to print outside of this block, this will give an "discountedPrice is not defined" error.
11. What will happen at line 13 and why?
    1.  finalprice is in the scope, but const variables cannot be reassigned as the code is trying to do in line 16, so this will give a error.
12. What will the function return for discountPrices([100, 200, 300], .5)? Give a brief explanation.
    1.  We are trying to change the values of the const variables finalPrice and discounted which we cannot do, thus this will give an error.
13. Given the above Object, write the notation for:  (These should be in your part1.md)
    1.  Accessing the value of the name property in the student object
        1.  student.name
    2.  Accessing the value of the Grad Year property in the student object
        1.  student['Grad Year']
    3.  Calling the function for the greeting property in the student object
        1.  student.greeting()
    4.  Accessing the name property of the object in the Favorite Teacher property in student
        1.  student['Favorite Teacher'].name
    5.  Access the first index in the array of the courseLoad property of the student object
        1.  student.courseLoad[0]
14. Arithmetic
    1.  ‘3’ + 2
        1.  We will get 32, + concatenating strings, 2 is terated as string
    2.  ‘3’ - 2
        1.  this will return 1, - will change '3' to a number
    3.  3 + null
        1.  we will get 3, null acts as zero
    4.  ‘3’ + null
        1.  we will get 3null, again + will concatenate
    5.  true + 3
        1.  4, true is treated like 1 and we do number addition
    6.  false + null
        1.  0, false is treated as 0 and null is treated as 0
    7.  “3” + undefined
        1.  3undefined, again + will concatenate as undefined is treated as string
    8.  “3” - undefined
        1. We get undefined because undefined is treated as NaN
15. Comparison
    1.  ‘2’ > 1
        1.  true string 2 becomes number 2
    1.  ‘2’ < ‘12’
        1.  true, string 2 becomes number 2
    2.  2 == ‘2’
        1.  true, '2' becomes number 2
    3.  2 === ‘2’
        1.  false, strict equaltiy checks without conversion
    4.  true == 2
        1.  false, true is set to 1
    5.  true === Boolean(2)
        1.  True, booleean(2) is true
16. Explain the difference between the == and === operators.
    1.  === is strict equalit,does not do conversion when checking different data types
17. From the code snippet below, explain what gets printed and why.  (This should be in your part1.md
    1.  How are you? gets printed because 2 == true does not evaluate to true as 2 != 1, but (2) does return true.
18. see part1-question18.js
19. First, newArr will make an empty array, then the for loop will iterate from i = 0 to i < 3. for each iteration, we will call the function do something with the ith entry of the array and the function(x) which returns x * 2, then we will push the result into our newArr. doSomething calls the function(x) with x = the ith entry of the array plus two. So for the first iteration it will call function(1+2) which will return 3*2 = 6. 6 is then pushed into the array to be returned. Following this for the next two elements from our input array we get the values 8 and 10. So our final result is the array [6,8,10].   
21. see part1-question20.js
22.  What is the output of this code? (This should be in your part1.md)
     1.   1 
     2.   4
     3.   3
     4.   2
