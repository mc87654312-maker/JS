const account_Id = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "jaipur"
let accountState;

//account_Id = 2


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(account_Id);
/*
Prefer not to use var
because of issue in block scope and functional scope 
*/

console.table([account_Id, accountEmail, accountPassword, accountCity, accountState])