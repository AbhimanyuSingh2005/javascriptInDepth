const accountId = "1234";// it is used to define a constant
let accountName = "Abhimanyu Singh";//it is preferred to define variable 
var accountEmail = "abimayu@gmail.com";// have no block scope and functional scope so it is not preferred to decelare a variable
accountCity = "Noida";//variable can be defined in this way but should not be used


console.table([accountId,accountName,accountEmail,accountCity]);

accountName = "Aryan";
accountEmail = 'aryan@gmail.com';
accountCity = 'delhi';

console.table([accountId,accountName,accountEmail,accountCity]);
