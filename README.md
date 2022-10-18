Revature Social-Media App

This application allows users to register and log in to a social media app. Users can then make posts, like posts, comment on other posts as long as there are no
profanities, search for people, and flip the application screen to dark mode if they choose to do so. A few of the main technologies used in this application 
include angular, java spring, aws, postman, and github. Github is used to host and manage source code that the team created. Java spring was used to create the 
back-end of the project on Intellij. Postman was used to test requests from the back-end. Angular was used to create the front-end of the project. AWS was then 
used to host the back-end and front-end on the cloud. 

In this project we faced a few challenges. The first problem we encountered was with profanities. We created a profanity filter that wouldn't allow profanities to 
be posted, but then we noticed they could still be posted in the replies to posts. This was solved by creating a second filter for the comments. Creating a 
second profanity filter however made a new problem where if it took a null value the server would return a 500 error. the solution to that was to just use the second
filter only if the first filter was not null. The second issue we faced was when we tried to use the search button to search for people. The search button wouldn't
return anyone even though the people we were searching for were in the database. The search button somehow wasn't connecting to that database. To solve this we created
a custom query in the UserController in the back-end. Another challenge faced was when trying to connect the front-end and back-end for the like button. The like button
worked in the front-end when clicked but nothing would update in the back-end when it was clicked. To solve this we corrected some code in the front-end, which was 
causing the issues. A big issue that took us a couple of days to fix was hosting the back and front-end with AWS. We kept getting CORS errors when trying to login and 
register. To solve this we updated the @CrossOrigin() in the controllers in the back-end.
