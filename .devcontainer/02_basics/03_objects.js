// singleton object
// object.create

// object literals

const JsUser = {
    name: "Madhab",
    "full name": "Madhab Swain",
    mySum: "mykey1",
    age: 18,
    location: "Bhubaneswar",
    email: "Madhab@gmail.com",
    isLogging: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser["mySum"])
// console.log(typeof JsUser.mySum)


JsUser.email = "Madhab@chatgpt.com"
//Object.freeze(JsUser)
JsUser.email = "hitesh@microsoft.com"
//console.log(JsUser);


JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



