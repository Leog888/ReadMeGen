const fs = require("fs"); 
const inquirer = require ("inqirer")
 const uttil = require("node:util")

inquirer
.prompt ([
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

fs.writetofile( )