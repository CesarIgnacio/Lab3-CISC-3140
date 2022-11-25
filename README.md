# Lab3-CISC-3140

Lab 3 for Web Application

## Purpose

The purpose of this repository is to provide a API to allow common database operations CRUD (Create, Read, Update, and Delete records). In our case, we made a database system focusing on the types of squirrels found around Brooklyn College. In order to conduct proper research, we decided to add ways to identify and categorize these squirrels. Such forms include an initial ID, which is the order in which we found them, their location, their age, their unique color ID, and whether we caught them eating or not. The color ID is a separate system we made to help categorize the many shades of fur the squirrels could have had, as well as the multiple combinations that can come out of them. If someone is interested in finding out more about a specific squirrel, they can enter the ID number and explore information about it.

## Tools used

- We installed [Node.js](https://nodejs.org/en/) v18.12.1.
- We installed the npm v9.1.1. We used the commands npm install `-g npm@9.1.1`.
- For database handling we used [SQLite](https://www.sqlite.org/index.html).
- For installing ExpressJS we followed the instructions in [The official ExpressJS website](https://expressjs.com/en/starter/installing.html). 1. We ran the commnad `npm init`, and we were presented with a guide in case we needed assistance with anything. Shortly after, we had to verify information about the project such as the repository and entry points ('index.js' in our case) of the project. This created a file named package.json. 2. We ran the command `npm install express`. This created a file named package-lock.json.
  `Comment: Diff - Comes from the word difference. The representation of the difference between two files, it highlits the differences so they are easier to undersand.` 3. We created an app.js. There we set up the Express.js localhost on port 3000. Using the code shown in this [website](https://javascript.plainenglish.io/deploying-a-localhost-server-with-node-js-and-express-js-58775f098407) as a template. We changed the values that were suited for our website. 4. Then, we created an index.html file to test the port was connected. We also used this [website](https://expressjs.com/en/starter/hello-world.html) for guidance.
  `Comment: Pressing Ctr-c in the terminal will kill the process on the localhost 3000 port.`

[Modify an item and Delete an item](https://www.youtube.com/watch?v=cqapa6mI3jE):

- Get
- Put (used to update an item) (we'll have information in two places: body [Json] and user [URL])

fixed the error `Error: Cannot find module 'sqlite3'` [link](https://www.sqlitetutorial.net/sqlite-nodejs/connect/)


## What each file does

Sqlite Folder - includes installation packages
- Squirrel.db - Contains the database for the squirrels using sqlite. Located within sqlite folder.

app.js - provides code to help generate the data

index.html - Structures the website with texts and the hyperlinks that can take you to the data

package.json - contains metadata to help install necessary items as well as to run script. Also gives access to npm command

package-lock.json - ensures that the version of your application is working properly and is updated [link](https://www.geeksforgeeks.org/difference-between-package-json-and-package-lock-json-files/#:~:text=package.-,lock.,and%20save%20it%20in%20package.)


## Endpoints:

- /squirrel (get) - Retrieves all elements inside entire table
- /color (get)- Retreieves all color elements inside table. 
- squirrel/(number) (get)- Retrieves information of a specific squirrel. The number you enter is the ID of the squirrel that will be displayed. 
- color/(number) (get)- Retrieves information of a specific color. The number entered is the ID of the color that will be displayed.
- /squirrel (post) - Registers and adds a new squirrel with a new ID and with predefined data. 


## Problems/Challenges

- We decided to model the endpoints in a way where if we click any of the links, and then decided to open the link via the source code.

Issue: After getting the localhost and an ID one time, if you did it again, it crashed due to a file error. The problem still exists, but to get around thism we decided to open via source code, as it presents the info. To get rid of the crash, we killed the system. 


- We were able to find a way to allow someone to post a submission, however, when it was posted, the only thing that changed was the ID value. Everything else was the same as the previous. 

Issue: We know how to send the data of the squirrel, but not how to request new data for the database for a new element. The information was not dynamic enough to be considered unique. 


- We had multiple situations where we found two websites giving different instructions to accomplish tasks, so it took time to figure out what was the better method.

Example: When trying: [link]() vs [link](https://www.sqlitetutorial.net/sqlite-nodejs/insert/)

Getting information from a file and linking it to the code. For example, in Java you have inputfiles and Scanners. In insomnia, it always said that the database was closed. This was confusing and made us wonder what was going wrong, as well as how these requests would effect the code. We decided not to use db.close() in the end like the website mentioned because it was not helping our program run. 


- We used the code presented in class as a template to help us start, however when trying to branch out, we went through a little diffuculty trying to figure out how, using trial and error to guide as a guide.
