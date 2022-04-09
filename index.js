// TODO: Include packages needed for this application
    const inquirer = require("inquirer")
    const fs = require("fs")
    const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"username",
        message:"What is your GitHub username?"            
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFile( fileName, markdown, function(err){
        if(err) throw err
        console.log("README written")
    } )
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(
        questions
    ).then(function(data){
        console.log(data)
        // const fileName = "README.md"

        // const markdown = generateMarkdown(data)
        // fs.writeFile( fileName, markdown, function(err){
        //     if(err) throw err
        //     console.log("README written")
        // } )

        writeToFile("README.md", data)
    })
}

// Function call to initialize app
init();
