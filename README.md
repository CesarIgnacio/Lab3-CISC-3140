# Lab3-CISC-3140
Lab 3 for Web Application
## Purpose
The purpose of this repository is to provide a API to allow common database operations CRUD (Create, Read, Update, and Delete recods).
## Tools used
- We installed (Node.js)[https://nodejs.org/en/] v18.12.1. 
- We installed the npm v9.1.1. We used the commands npm install `-g npm@9.1.1`.
- For database handling we used (SQLite)[https://www.sqlite.org/index.html].
- For installing ExpressJS we followed the instructions in (The official ExpressJS website)[https://expressjs.com/en/starter/installing.html].
	1. We ran the commnad `npm init`, and we were presented with a guide in case we needed assistance with anything. Shortly after, we had to verify information about the project such as the repository and entry points ('index.js' in our case) of the project. This created a file named package.json.
	2. We ran the command `npm install express`. This created a file named package-lock.json.

Comment:
Diff - Comes from the word difference. The representation of the difference between two files, it highlits the differences so they are easier to undersand.

	3. We created an app.js. There we set up the Express.js localhost on port 3000. Using the code shown in this (website)[https://javascript.plainenglish.io/deploying-a-localhost-server-with-node-js-and-express-js-58775f098407] as a template. We changed the values that were suited for our website.
	4. Then, we created an index.html file to test the port was connected. We also used this (website)[https://expressjs.com/en/starter/hello-world.html] for guidance.

Comment:
Pressing Ctr-c in the terminal will kill the process on the localhost 3000 port.