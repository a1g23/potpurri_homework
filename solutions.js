// Write a function named setAlarm that has two arguments.

// The first argument: employed (the boolean true would be passed in as a parameter whenever you are employed)
// The second argument: vacationing (the boolean true would be passed in as a parameter whenever you are on vacation)
// The function should only return true if you are employed and not on vacation (because these are the circumstances 
//under which you need to set an alarm, of course!). It should return false otherwise.

const setAlarm = (employed, vacationing) => {
    if(employed === true && vacationing === false) {
        console.log(true)
    } else {
        console.log(false)
    }
}

setAlarm(true, true) // => returns false
setAlarm(false, false) // => returns false
setAlarm(false, true) // => returns false
setAlarm(true, false) // => returns true



// Write a function named oddNumberCount which receives one argument that should be a number. The function should return how many positive odd numbers there are below the number passed into the argument.

// Example expected output:

// for(i = 1; i < 7; i += 2) { // first can I write a loop that logs all odd numbers up to a point
//         console.log(i)
//     }


const oddNumberCount = (number) => {
    const values = []                          // I can create an array with no values in it
    for(i = 1; i < number; i += 2) { 
        values.push(i)                          // push the odd numbers into into it until the parameter via loop
    }
    console.log(values.length)                  // console.log the length of the array
}


oddNumberCount(7) // => returns 3 (because [1, 3, 5] are the positive odd numbers below 7)
oddNumberCount(16) // => returns 8 (because [1, 3, 5, 7, 9, 11, 13, 15] are the positive odd numbers below 




// Trolls are attacking your comment section! Let's neutralize the threat by removing all vowels from their comments. 
//That'll make them look real silly.

// Write a function named trollsBeGone which receives one argument that should be a sentence (a string). 
//The function should return a new string with all the vowels removed from the original string.

// Example expected output:

// first: what are my vowels "a, e, i, o, u" - 
// if I see a value in my string, I want to delete it from the output
// how to "scan" string (looking that up)

const trollsBeGone = (stringValue) => {
    let text = stringValue.toString()
    let newText = text.replace(/a|e|i|o|u/g,"") //reg expression, looking for all values, globally. and replacing with nothing
    console.log(newText)
}

trollsBeGone("This website is for losers LOL") // => returns "Ths wbst s fr lsrs LL"
