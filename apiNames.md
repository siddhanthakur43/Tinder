# Tiner API's

authRouter
POST /signup
POST /login
POST /logout

profileRouter
GET /profile/view
PATCH /profile/edit
PATCH /profile/password

connectionRouter
POST /request/send/interested/:userId
POST /request/send/ignored/:userId
POST /rquest/review/accepted/:requestId
POST /request/review/rejected/:requestId

GET /user/connections
GET /user/request
GET /feed Gets you the profile of the other users on the platform



