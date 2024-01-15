
![license](https://img.shields.io/badge/License-MIT-yellow.svg)
## Title
e_commerce back end
  
## Description 

This project objective isto build the back end of an ecommerce application 
## Table of Contents

1. [Description](#description) 
2. [Installation](#installation) 
3. [Usage](#usage) 
4. [License](#license)
5. [Contributing](#contribution)
6. [Testing](#testing)
7. [Questions](#questions) 

## Installation
Git Clone to local repository
Install npm  through vs terminal 
creat a .env and input the required data 
 DB_NAME='ecommerce_db'
DB_USER=''
DB_PASSWORD=''
Run create the database through mysql> source schema.sql
Populate the database : npm run seed
then run node server.js  

## Usage 
n/a

## License
License is under MIT license 

## Contribution
n/a

## Testing
verify the code against the Acceptance Criteria
```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Questions

Git User link: https://github.com/mustafasigad  

Email: mus.sigad@gmail.com  

Video link : https://drive.google.com/file/d/1SII3kw9QKadelTGZirDu25GlreYpLce9/view
