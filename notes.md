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
