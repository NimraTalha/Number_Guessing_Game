import inquirer from "inquirer";
async function main() {
    const randomNumber = Math.floor(Math.random() * 6 + 1);
    const answers = await inquirer.prompt([
        {
            name: "userGuessNumber",
            type: "number",
            message: "Please guess a number 1 - 6"
        }
    ]);
    if (answers.userGuessNumber === randomNumber) {
        console.log("Congratulations, you guessed the right number!");
    }
    else {
        console.log("Sorry, you guessed the wrong number");
    }
}
// Call the async function to execute your code
main();
