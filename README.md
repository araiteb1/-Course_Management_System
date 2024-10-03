### ClassHive:
  a mini courses manager platforme where user can view, filter, add and search for a course

## How is Works:
  > using the .env.template create a .env file in client and server. After that, using Docker run `docker compose up --build` this command will create both container for server and client the connection is already done if the .env are created.

## Run :
  > after  setting up docker all that left is run in your browser `http:localhost:3000`, you will be facing the login options where you can chose to use google or register. both ways will redirect you to profile where you can see the your course that you created or add a course, or you can go the courses and search for courses using search for title of author or filter with date

## technologies :
  > using Nestjs as in backend and Nextjs in front conbined with MongoDB as a databse ClassHive start zith loading the course from a json file and store them as init data for the app based on it the user can perform multiple actions such as searching and filtering those courses
>> the server is protected using Guards where we force the access token that got genereted after signin in or register, the authentication is protected using jwt that we generate while signin/up to the app and taht got deleted after `logout`

>> the client's routes are protected troo using the check for the access token in the cookiesjust for extra safety, and we clear them in the logout state
 
