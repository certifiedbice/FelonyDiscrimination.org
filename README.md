#FelonyDiscrimination.org

![FelonyDiscrimination.org Logo](http://felonydiscrimination.org/static/media/site-logo.d1c35237.png)

## Live Site:
### http://felonydiscrimination.org

## GitHub Client Repo:
### https://github.com/certifiedbice/Felonydiscrimination.org-client.git

## GitHub API Repo:
### https://github.com/certifiedbice/felonydiscrimination.org-api.git

## Trello Kanban:
### https://trello.com/b/jJdB3QEP/felonydiscriminationorg

## GitMind Component Map:
### https://gitmind.com/app/doc/725537041

## Gitmind HTML Wireframes:
### https://gitmind.com/app/doc/6b9493904

## Gist
### https://gist.github.com/certifiedbice/78f5dddc60243f1f1dd53ad99b7e332f

## Fundraising:
### https://www.gofundme.com/f/felonydiscriminationorg?utm_source=customer&utm_medium=copy_link&utm_campaign=p_cf+share-flow-1

# API Information

## API Endpoints
### GET '/'
### GET /api/orgs/:orgId
### GET /api/orgs/search
### POST /api/orgs/submit-org
### GET /api/orgs/:orgId/comments
### POST /api/orgs/:orgId/comments
### POST /api/orgs/:orgId/endorsements

## Scripts

+ Start the application `npm start`

+ Start nodemon for the application `npm run dev`

+ Run the tests `npm test`

+ Migrate the Tables into database ` npm run migrate ` or ` npm run migrate:test ` or `npm run migrate:production`

+ Seed Tables with data after migration `npm run seed`

+ Predeploy `npm audit && npm run migrate:production`

+ Deploy `git push heroku master`

## Deployment

This Server is deployed with Heroku at `https://limitless-reef-44232.herokuapp.com/`.

# React Client Information

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# About the project

## Problem:

Discrimination against persons with felony records is openly allowed by legislation. The result is unemployment, homelessness, higher ricidivism rates, and wasted tax money.

## Solution:

This app is going to provide a valuable resource to those unprotected souls in the form of a searchable database that lists out “friendly” and “unfriendly” establishments in order to assist them in finding organizations that will house and employ them. Furthermore, this system will be used to collect the data needed to seek amendments to the current legislation.

## Functionality:

The app allows for submission of organizations into the database for the purposes of archiving friendly
and unfriendly organizations. Further functionality allows users to mark an organization with either a
positive or negative endorsement, both of which will be summed, in order to provide a view of the
organizations practices. The system will also provide a comment system to allow users to attach their
comments about a particular organization.