const fs = require("fs"); 
const inquirer = require ("inqirer");
const util = require("util");
const GenReadME = require("./GenReadME");
// When I input util there are options as node util and util/types what are the difference?


inquirer
.questions ([
    {
        type: 'input',
        message: 'Project Title',
        name: 'title',
        required: true,
    },
    {
        type: 'input',
        message: 'description',
        name: 'Project Description',
        required: true,
    },
    {
        type: 'input',
        message: 'How can we install your software?',
        name: 'intstall',
        required: true,
    },
    {
        type: 'input',
        message: 'How do we use your software',
        name: 'usage',
        required: true,
    },
   
    {
        type: 'input',
        message: 'What are the contribution guidelines to the project',
        name: 'guidelines',
        required: true,
    },
{
    type: 'input',
    message: 'Can you give the testing instructions of the software?',
    name: 'test',
    required: true,
},
{
    type: 'input',
    message: 'Which license would you like to use?',
    name: 'license',
    choices: ['N/A license'],
    required: true,
},
{
    type: 'input',
    message: 'Enter Github username',
    name: 'username',
    required: true,
},
{
    type: 'input',
    message: 'Enter E-mail',
    name: 'email',
    required: true,
},   
])

function init() {
  generateMarkdown.getLicenses(licenses =>{
    licenses.forEach(obj => questions[6].choices.push(obj.name));
    inquirer
      .prompt(questions)
      .then(response=>{
        let data = response;
        fs.writeFile(`./Generated/Title.md`, GenReadME.GenReadME(data), err=>err?console.error(err):console.log('success'));
      })
  })
}

init()