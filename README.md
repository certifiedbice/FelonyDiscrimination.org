#FelonyDiscrimination.org

![FelonyDiscrimination.org Logo](http://felonydiscrimination.org/images/site-logo.png)

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

##Problem:

Discrimination against persons with felony records is openly allowed by legislation. The result is unemployment, homelessness, higher ricidivism rates, and wasted tax money.

##Solution:

This app is going to provide a valuable resource to those unprotected souls in the form of a searchable database that lists out “friendly” and “unfriendly” establishments in order to assist them in finding organizations that will house and employ them. Furthermore, this system will be used to collect the data needed to seek amendments to the current legislation.

##Functionality:

The app allows for submission of organizations into the database for the purposes of archiving friendly
and unfriendly organizations. Further functionality allows users to mark an organization with either a
positive or negative endorsement, both of which will be summed, in order to provide a view of the
organizations practices. The system will also provide a comment system to allow users to attach their
comments about a particular organization.

# Linus Server

This is the server used for the Linus application.

[Link](https://github.com/thinkful-ei-jaguar/TaylorP-FirstCapstone) to Linus Application GitHub

## API Endpoints

+ `/recipes` accepts GET requests along with parameters of keyword & filter, where keyword looks in the recipe name, and filter looks for the spirit category. Both need to be strings.
+ `/cabinet/:id` accepts GET and POST requests, with `:id` referring to the user_id. GET requests return all the spirits that the user has saved, and the POST request is used to add a spirit to the users collection.
+ `/favorites` accepts POST and DELETE requests. This posts and deletes new favorites, the user_id is sent via the body of the request.
+ `/favorites/:id` accepts GET requests, where `:id` is the user_id. This is used to get all the favorites of that particular user.

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