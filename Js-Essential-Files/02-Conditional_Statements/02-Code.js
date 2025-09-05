let age = 20;

// 1. if statement
if (age >= 18) {
    console.log("You are an adult.");
}

// 2. if-else statement
if (age < 18) {
    console.log("Minor");
} else {
    console.log("Adult");
}

// 3. if-else if-else ladder
if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else if (age < 60) {
    console.log("Adult");
} else {
    console.log("Senior");
}

// 4. switch statement
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Another day");
}

// 5. Ternary operator
let canVote = age >= 18 ? "Yes, can vote" : "No, too young";
console.log(canVote);
