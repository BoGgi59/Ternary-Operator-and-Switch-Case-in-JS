//AGE CALCULATION

//Taking age from user
let usersAge = prompt("How old are you?", "");

// explain to user allow or not to buy alcohol
/*if (usersAge >= 18) {
  alert("You allowed to buy alcohol!");
} else {
  alert(
    "You are not allowed to buy alcohol. you can choose a fruit juice in our market!"
  );
}*/

//using ternary operator
usersAge >= 18
  ? confirm("You allowed to buy an Alcohol")
  : confirm(
      "You are not allowed to buy alcohol. you can choose a fruit juice in our market!"
    );

//using ternary operator for console
usersAge >= 18
  ? console.log("You allowed to buy an Alcohol")
  : console.log(
      "You are not allowed to buy alcohol. you can choose a fruit juice in our market!"
    );

//using switch case
switch (true) {
  case usersAge < 13:
    alert("You are a baby))");
    break;
  case usersAge >= 13 && usersAge < 20:
    alert("You are teenager))");
    break;
  case usersAge >= 20 && usersAge < 30:
    alert("You are young");
    break;
  default:
    alert("You are old");
}

//using switch case for console
switch (true) {
  case usersAge < 13:
    console.log("You are a baby))");
    break;
  case usersAge >= 13 && usersAge < 20:
    console.log("You are teenager))");
    break;
  case usersAge >= 20 && usersAge < 30:
    console.log("You are young");
    break;
  default:
    console.log("You are old");
}
