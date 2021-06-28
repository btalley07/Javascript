//==================Exercise #1 ==========//
/*Write a function that takes in the string and the list of dog names, loops through 
the list and checks that the current name is in the string passed in. 
The output should be:
"Matched dog_name" if name is in the string, if no matches are present 
console.log "No Matches"
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

function findWords(){
    for(let i = 0; i < dog_names.length +1; i++){
        if(dog_string.toLowerCase().includes(dog_names[i].toLowerCase())){
            console.log(dog_names[i])
            
        } else{
            return 'no matches'
        }
    }
    return dog_names
}
    
console.log(findWords(dog_string,dog_names))
//Call method here with parameters

//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

names = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

function replaceEvens(arr){
    for(let i = 0; i < names.length; i++){
        if(i % 2 ==0){
            names.splice(i,1,'even index')
        }
    }
    return names
}
console.log(replaceEvens())

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]




//CODEWARS PROBLEM 1
/*
    Complete the function that accepts a string parameter, 
    and reverses each word in the string. 
    All spaces in the string should be retained.
*/

//python answer
// def reverse_words(text):
//     return ' '.join(word[::-1] for word in text.split(' '))

//JS answer
let reverse_words = (str) => str.split('').reverse().join('');
console.log(reverse_words(`This is an example!`));




//CODEWARS PROBLEM 2
/* 
    Task
Given an integral number, determine if it's a square number:
*/

//PYTHON ANSWER
/*
   def is_square(n):       
    if n < 0:
        return False
    elif n == 0:
        return True
    i = 1
    while i < n:
        m = i * i
        if m == n:
            return True
        elif m > n:
            return False
        i += 1

    return False
*/

// //JS ANSWER
var is_square = function(n){
     if(n === 0){
    
     return true} else {
     return n > 0 && Math.sqrt(n) % 1 === 0;}
}
console.log(is_square)