create Repository
Initialize the repository
node_modules, package.json, package-lock.json
Install Express
create server using express
listen to port 7777
write request handlers for /test and /hello
Install nodemon and add scripts in package.json
what are dependencies
what is the use of '-g' while npm install
Differnce b/w caret ^ and tilde ~

Initialize git
.gitignore
create a remote repo on github
push all code to remote origin
Play with routes and routes extension /test, /test/hello, /hello, /
Order of routes matters a lot
Install postman and make a workspace/collection/test api
write logic to handle get, put, post, patch, delete api call and test them in postman
Explore routing and advance routing using ?, +, * in the routes
Explore regex in route /a/, /.*fly$/
Go through with express documentation to learn more about route
Reading the query params in routes
Reading the dynamic routes

Multiple Route handler
next()
next function and error along with res.send()
app.use('/route', [r1, r2, r3, r4])
what is middleware? why do we need it
how express handle rquest behind the scenes
diff bw app.use & app.all
write a dummy auth middle ware for admin routes.
write a dummy auth midddle ware for all user routes. except /user/login
Error handling using app.use('/', (err, req, res, next) => {}) use always at the end

create a free clusted on mongodb official website(monodb atlas)
install mongoose
connect application to the database <connectionURl>/tinder
call connectDb function and connect to db before starting the application on 8080

create userSchema & user Model
create post /signup api to add data to database
push some documents using api calls from postman
error handling using try catch

diff bw json and java object
add the express.json() middleware to app
make signup api dynamic to receive the data from postman(end User)
Use user.findone() with if we have duplicate emailId 
API- get user by email
API- get all user from DB
API- to delete the User
diff bw patch and put
API:- create update user api using id
explore mongoose document specially models
what are options in Model.findOneAndUpdate method and explore it
API:- to update user with emailId

//Explore schema options from documentation
Add required, unique, min, trim, default, minLenght, custom validation function for gender
Improve db schema ,pull all appropriate validation in all fields
Add timestamps to user schema
Add api level validation on patch request and signup post api
Data sanitization: add api validation for each field
install validator
user validator and explore validator library function and user isEmail, isURL, isStrongPassword
Never trust req.body

validate data in signup API: create helper function
install bcrypt package
create password hash using bcrypt
save user using encrypted password
create login api
compare password throw error if passowor or email is invalid

install cookie-parser
send dummy cookie to user
create GET/profile api and check if you get the cookie back res.cookie('token', token);
read cookie
install jsonwebtoken
in login api after email and password validation create jwt token and send it to user inside cookie
read cookie inside profile api and find logged in user

userAuth middleware
add the userAuth middleware in profile api and send connection req
set the expiry of jwt and cookie to 8days

write user schema methods