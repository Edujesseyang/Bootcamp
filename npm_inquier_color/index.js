const inquirer = require(`inquirer`);
const colors = require(`colors`);

let string = `Hello, welcome to use text coloring tool!`;
// syntax: str_var.color_var   or `text string`.color_var
console.log(string.america);

let my_text = `You can enter a text message, and choose the color that you want, then get the colored message. `;
// syntax:  const var_name = colors[`color_name`](`text_content`);
let red_text = colors[`green`](my_text);
console.log(red_text);


inquirer
    .prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter your text message: '.cyan,
        },
        {
            type: 'list',
            name: 'color',
            message: 'What color do you want the text to display?'.cyan,
            choices: ['red', 'green', 'yellow', 'cyan', 'grey', 'america'],
        },
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        const coloredMessage = colors[answers.color](answers.text);    // syntax:  const var_name = colors[`color_name`](`text_content`);
        console.log(`Here is your message: ${coloredMessage}`);
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
            console.log('Prompt could not be rendered in the current environment.');
        } else {
            // Something else went wrong
            console.error('An error occurred:', error);
        }
    });

