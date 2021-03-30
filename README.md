# Yicketty ~ A baseball game

This is the front end of the web application Yicketty, an eventual type of baseball game.  Currently you can view each MLB team and their current roster and each individuals stats.  You can select from your favorite team and set your line up from the roster that you will eventually play the game with.  

*Dreaming Big* The eventual game play, each player will have an at Bat until you have reached 3-outs.  Roll the dice to have your player 'hit' and run the bases. Results will be logged.  Indivdiual player stats will be recorded and can view by each rosters stats.

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

## Installation

1. Clone the ***Yicketty*** repository in your terminal:  `git@github.com:*{your-username}*/yicketty.git`
2. Move to the project directory: `cd yicketty`
3. Make sure that you are connected to the backend, follow directions [here @Yak](https://github.com/cassymarie/yak) to connect.
4. from the project directory, install the required packages: `npm install`
5. Once installation complete, start the project `npm start`
   . You maybe directed to open on a different server number, type `Y` and continue.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Dependencies

the following node modules will be installed with this project:

- react: ^17.0.1,
- react-bootstrap: ^1.5.2,
- react-bootstrap-icons: ^1.4.0,
- react-dom: ^17.0.1,
- react-redux: ^7.2.2,
- react-router-dom: ^5.2.0,
- react-scripts: 4.0.3,
- readline: ^1.3.0,
- redux: ^4.0.5,
- redux-thunk: ^2.3.0,
- web-vitals: ^1.0.1,
- webpack: ^4.44.2
