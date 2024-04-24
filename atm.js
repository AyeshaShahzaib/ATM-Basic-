import inquirer from "inquirer";
let pin = 12345;
let initial_amount = 10000;
const input = await inquirer.prompt([
    { message: "Enter your pin", type: "input", name: "pin_input" }
]);
if (pin != input.pin_input) {
    console.log("Incorrect pin");
}
else {
    const input = await inquirer.prompt([
        { type: "list", name: "Operation", choices: ["CheckBalance", "Withdraw", "Exit"] }
    ]);
    if (input.Operation == "CheckBalance") {
        console.log(initial_amount);
    }
    else if (input.Operation == "Withdraw") {
        const input = await inquirer.prompt([
            { message: "Enter your withdraw amount", type: "input", name: "Withdraw_input" }
        ]);
        if (input.Withdraw_input <= initial_amount) {
            initial_amount = initial_amount - input.Withdraw_input;
            console.log("now your Balance is", initial_amount);
        }
        else {
            console.log("enter correct amount");
        }
    }
}
