// TODO: Include packages needed for this application
    const inquirer = require("inquirer")
    const fs = require("fs")
    const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input

    const questions = 
    [
        {
            type:"input",
            name:"title",
            message:"What is the title of your project?",
            //validate property to check that the user provided a value
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},            
        },
        {
            type:"input",
            name:"description",
            message:"Provide a short description. Why did you build this project? What problem does it solve? What did you learn? What was your motivation?",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        // Insert Table of Contents
        {
            type:"input",
            name:"installation",
            message:"How do you install your app?",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {
            type:"input",
            name:"instructons",
            message:"Instructions to be followed?",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {
            type:"input",
            name:"usage",
            message:"How do you use your app?",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {
            type:"input",
            name:"credits",
            message:"Any credits?",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {
            type:"input",
            name:"contributing",
            message:"How can one contribute?",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {
            type:"input",
            name:"tests",
            message:"Testing instructions?",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {   //list of licenses
            type:"list",
            name:"license",
            message:"What license did you use?",
            choices: ["The MIT License","The GPL License","Apache License","GNU License","INSERT OTHER","N/A"],
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {
            type:"input",
            name:"git",
            message:"GitHub username:",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        },
        {
            type:"input",
            name:"email",
            message:"Email:",
            validate: (value)=>{ if(value){return true} else {return "I need a value to continue"}},
        }       
    ]

// ).then(({
//     title,
//     description,
//     installation,
//     instructions,
//     usage,
//     credits,
//     contributing,
//     tests,
//     license,
//     git,
//     email
// })=>{
// //template to be used


//TODO: Create a function to write README file ***DONE***
function writeToFile(fileName, data) {
    const markdown = generateMarkdown(data)
    fs.writeFile( fileName, markdown, function(err){
        if(err) throw err
        console.log("README written")
    } )
}


//TODO: Create a function to initialize app ***DONE***
function init() {
    inquirer.prompt(
        // Insert array of questions above
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


//Function call to initialize app ***CONFIRMED TO NOT WORK***
init();
