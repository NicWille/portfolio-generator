const inquirer = require('inquirer')

inquirer
  .prompt([
        /* Pass your questions in here */
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?'
    }

  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
    console.log(answers)
  })





// const fs = require('fs')
// const generatePage = require('./src/page-template.js')

// const pageHTML = generatePage(name, github)

// fs.writeFile('./index.html', pageHTML, err =>  {
//   if (err) throw err

//   console.log("portfolio complete")
// })


