# Evaluate a News Article with Natural Language Processing

## this is a small app you can use it to evaluate any Article to get some information like:
- Its label.
- its polarity.
- its subjectivity.
- its keywords.
- its location.
- its organization.
- as well as how is the people mentioned inside it.

## This project have two sides:
1. first we have the server side which is will receive the article from the client side and send it to the api to evaluate it and it will receive the data from the api and parse it into a valid data to send it again to client side

2. And the client side which is will take the input from user and send it to the backend _server side_ in order to receive the evaluated and parsed data to render it on the screen


## Get Up and Running

Fork this repo, then clone the branch of your choice from your forked repo down to your computer:

```
git clone -- git@github.com:[your-user-name]/webpack-express.git --
```

`cd` into your new folder and run:
- ```npm install```
- ```npm run build-dev``` to start the webpack dev server
- ```npm run build-prod``` to generate a dist folder for prod
- ```npm start``` to run the Express server on port 8081
