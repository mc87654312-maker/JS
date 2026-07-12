function sayName(){
    console.log("M");
    console.log("A");
    console.log("D");
    console.log("H");
    console.log("A");

}
//sayName()

// function addTwonumbers(num1, num2){  // parameters
//     console.log(num1 + num2);
// }

// addTwonumbers(3, null)  // arguments

// addTwonumbers(3, 4) 

// addTwonumbers(3, "a") 

function AddTwonumbers(num1, num2){  // parameters
    let result = num1 + num2;
    console.log("MADHA");
    return result
}

const result = AddTwonumbers(3,5)

//console.log("Result: ", result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("MADHA"))
// console.log(loginUserMessage())

// function calculateCartPrice(...num1){
//     return num1

// }

// console.log(calculateCartPrice(200, 400, 500));


// const user = {
//     username: "hitesh",
//     price: 199
// }
// function handleobject(anyobject){
//     console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
// }

 //handleobject(user)

// handleobject({
//     username: "sam",
//     price: 399
// })


// const myNewArray = [200, 400, 100, 600]

// function returnSecondValue(getArray){

//     return getArray[1]
// }
// console.log(returnSecondValue(myNewArray));


