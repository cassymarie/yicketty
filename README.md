# Yicketty ~ A baseball game

This is the front end of the web application Yicketty, an eventual type of baseball game.  You can select from your favorite team and set your line up from the roster.  You will be matched with a random team to begin the game. Currently you can view each MLB team and their current roster and each individuals stats.  You can set the lineup that you will eventually play the game with (Hoping by review time!)

Upon game play, each player will have an at Bat until you have reached 3-outs.  Roll the dice to have your player 'hit'.  Results will be logged.  

Yicketty uses [Yak](https://github.com/cassymarie/yak) repository for the backend, as well as following GitHub a main [Yicketty-Kay](https://github.com/users/cassymarie/projects/1) project board with linked repositories to individual boards with issues are located at [Yicketty](https://github.com/cassymarie/yicketty/projects) and [Yak](https://github.com/cassymarie/yak/projects).

## Flatiron Final Project

This project serves as the final project from the online Software Engineering course.  Below are the basic requirements that need to be met.

- [x] The code should be written in ES6 as much as possible
- [x] Use the [create-react-app](https://github.com/facebook/create-react-app) generator to start your project.
- [x] Your app should have one HTML page to render your react-redux application
- [x] There should be 5 stateless components
- [x] There should be 3 routes
- [x] The Application must make use of react-router and proper RESTful routing.
- [x] Use Redux middleware to respond to and modify state change
- [x] Make use of async actions and redux-thunk middleware to send data to and receive data from a server
- [x] Your Rails API should handle the data persistence with a database. You should be using fetch() within your actions to GET and POST data from your API - do not use jQuery methods.
- [x] Your client-side application should handle the display of data with minimal data manipulation
- [x] Your application should have some minimal styling.

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.