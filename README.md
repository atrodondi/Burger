# Burger
Eat Da Burger - This app allows the user to store burgers they would like to eat in a database, and update the database after they have eaten a burger, changing the burger's status to eaten. A helpful tool for the chronically hungry and forgetful.

# How To for Users
1. Type in a burger name that you would like to store and save for future eating.
2. Once you have eaten a specific burger, hit the devoured button and look forward to another burger on your list!

# How To for Devs
1. Open route file and NPM install to get the dependencies.
2. Change your database information in the connection.js file.
3. Type 'node .\server.js' to get the server running.
4. Hit up the local host + port in your browser and get going!


# What is happening under the hood:
1. The page loads with all items in the database (eaten or uneaten).
2. The user enters any prospective burgers they wish to eat and submit it to the list. Each submission is then added to the DB and displayed.
3. If a user devours a burger, they hit the devour button and the app changes relavant data in the database to reflect that the burger in question has been eaten. The eaten burger is then moved on the screen to its appropriate place.


# Technologies
1. [Node.js](https://nodejs.org/en/)
2. [Express package](https://www.npmjs.com/package/express)
3. [Handlebars.js](https://www.npmjs.com/package/handlebars)

# Live Site
[Here is a working example of the app!](https://warm-escarpment-40580.herokuapp.com/)

 # Questions?
 Developed by [A Rodondi](https://github.com/atrodondi)
