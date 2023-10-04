# Ece-webtech-2023-fall-grp-3-05
## Introduction

Node.js is used in order to create a local web application. It will respond with Hello and a name depending of the url used to watch the application :
http://localhost:8080/hello/YourName : the application will great you with the sentance "Hello YourName" 

Express will help us creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app :
1. http://localhost:8080/articles : Show all the articles in our database
2. http://localhost:8080/articles : Using Postman we can post a new article
3. http://localhost:8080/articles/:articleId : Show the article with the articleId we have entered
4. http://localhost:8080/articles/:articleId/comments : Get comments from a certain article with the articleId we have entered
5. http://localhost:8080/articles/:articleId/comments : Using Postman we can post a new comments on the articleId we have entered
6. http://localhost:8080/articles/:articleId/comments/:commentId : Find a certain comments from a certain article from their Id we have entered

### Usage

1.  Clone the repository to your machine
``` bash
git clone https://github.com/benjhan/ece-webtech-2023-fall-gr03-05/
```
2.  Install prerequisites application : Node.js, express, uuid
``` bash
npm install
npm install express
npm install uuid
```
3.  Go to your Terminal and run the program
``` bash
npm run start
```
4.  Now open local host (http://localhost:8080) in your browser and change the url depending of what's written before

#### Authors
Théophile Broqua
Benjamin Han    
Adrian Athanasopoulos
