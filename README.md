"Poll Vault" is a front-end demo app made with react/redux and material UI components. It allows users to vote on and comment on polls. Data persistence is done through the user's browser's localStorage and a service worker caches the bundled html, css, and javascript so the app loads through the network only once before being usable without a network connection.

Live site: [https://poll-vault.herokuapp.com/](https://poll-vault.herokuapp.com/)

![Poll Vault](http://res.cloudinary.com/dkw0kkkgd/image/upload/v1482190322/Screen_Shot_2016-12-19_at_5.31.18_PM_agsge0.png)

### Local Setup
***

Clone this repo to your local machine by running `git clone https://github.com/fleemaja/poll_app_demo.git` in the terminal.
Navigate to the project root and do the following:


##### 1. install 3rd party code/dependencies
  * run `npm install` to install the node_modules

##### 2. run the webpack module bundler and start the server
  * run `npm start`
  * open `http://localhost:8080/` in a browser to use the web app
