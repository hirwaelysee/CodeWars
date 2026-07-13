function check(age){
    try{
        if(typeof age === 'number'){
            return `My age is ${age}`;
        }else{
            //new error created.
            // name of the error is ReferenceError and message of the error is 
            // 'Age is not a number'
            throw new ReferenceError('Age is not a number');
        }
    }catch (err) {
        //when we catch the error we can log out the message or name or stack containing the whole 
        // error stored in the stack.
        console.error('Error: '+ err.message);
    }
}
console.log(check('20'))

/*
try --> wraps the code that might throw and error
catch --> receives and handles an error thrown from the associated try
throw --> creates and throws an error (or another value intentionally)
finally --> runs after try/catch whether an error occured or not =, typically for cleanup.  
*/