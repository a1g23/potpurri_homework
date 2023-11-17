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
