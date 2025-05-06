🏡 Eyrie API Documentation
Welcome to the Eyrie API. This README provides a comprehensive overview of authentication, house listing, and user management endpoints.

🛡️ Auth API
Base Path: /auth

📝 POST /auth/signup
Description: Register a new user.

Request Body:

json
Copy
Edit
{
  "fname": "John",
  "lname": "Doe",
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
Responses:

201 Created: User created successfully.

400 Bad Request: Missing required fields.

403 Forbidden: User already exists.

500 Internal Server Error: Unexpected failure.

🔐 POST /auth/login
Description: Authenticate a user and receive JWT tokens.

Request Body:

json
Copy
Edit
{
  "email": "john.doe@example.com",
  "password": "securePassword123"
}
Responses:

200 OK:

json
Copy
Edit
{
  "accessToken": "jwt-access-token",
  "refreshAccessToken": "jwt-refresh-token"
}
400 Bad Request: Missing fields.

401 Unauthorized: Invalid credentials.

500 Internal Server Error: Something went wrong.

🔄 POST /auth/refreshToken
Description: Generate a new access token using the refresh token.

Request Body:

json
Copy
Edit
{
  "refreshAccessToken": "<refresh_token>"
}
Responses:

201 Created:

json
Copy
Edit
{
  "accessToken": "new-jwt-access-token"
}
400 Bad Request: Refresh token not provided.

401 Unauthorized: Token not found or expired in Redis.

403 Forbidden: Invalid token signature or content.

500 Internal Server Error: General failure.

🚪 POST /auth/logout
Protected Route ✅
Middleware: verifyJwtToken

Description: Logs out the user by invalidating the refresh token.

Request Body:

json
Copy
Edit
{
  "refreshAccessToken": "<refresh_token>"
}
Responses:

200 OK: Logout successful.

400 Bad Request: Missing refresh token.

500 Internal Server Error: Logout process failed.

🌐 GET /auth/google
Description: Redirects user to Google OAuth login via Passport.

Details:

Redirects to Google's OAuth2 consent screen.

Requested Scopes:

profile

email

Response:

HTTP redirect to Google.

🔁 GET /auth/google/callback
Description: Callback endpoint for Google after OAuth login.

Responses:

200 OK: Returns authenticated user data.

json
Copy
Edit
{
  "id": "user_id",
  "email": "user@example.com",
  "name": "User Full Name"
}
Handles failure via Passport’s error mechanisms.

🔐 Middleware
verifyJwtToken
Used on: POST /auth/logout

Description: Validates the JWT access token in the request header.

Behavior: Attaches req.payload if valid; rejects otherwise.

🧠 Notes
Refresh tokens are stored in Redis with expiration.

Passwords are hashed with argon2.

JWT access and refresh tokens are signed with secret keys.

Logging out requires both a valid access token and invalidation of the refresh token.

🏠 House API
Base Path: /houses
Middleware: verifyJwtToken, roleGuard(['admin', 'seller', 'Buyer'])

📤 POST /houses/upload
Description: Upload a new house listing along with images/videos.

Form Data:

Fields: name, houseType, description, address, numOfBed, numOfBathRoom, price, squareFt

Files: .jpg, .jpeg, .png, .mp4

Responses:

200 OK: Upload successful.

400 Bad Request: Missing required fields or files.

500 Internal Server Error: Upload failed.

🛠️ POST /houses/update/:houseId
Description: Update a house’s details and replace its media files.

Constraints: Only allowed if the house status is not approved.

URL Parameters:

houseId (string) – ID of the house to update

Responses:

200 OK: Update successful.

400 Bad Request: Invalid house ID or missing data.

422 Unprocessable Entity: Cannot update an approved house.

500 Internal Server Error: Update failed.

❌ GET /houses/delete/:houseId
Description: Delete a house listing and all associated media.

Rules:

Seller may delete houses in pending or disapproved status.

Admin may delete houses in approved or sold status.

URL Parameters:

houseId (string) – ID of the house to delete

Responses:

204 No Content: Deletion successful.

401 Unauthorized: Role not permitted to delete this status.

500 Internal Server Error: Deletion failed.

👤 User API
Base Path: /users

🛒 GET /users/buyers
Middleware: roleGuard(['Buyer', 'admin', 'seller'])

Description: Endpoint accessible to buyers (or higher roles).

Response:

json
Copy
Edit
{
  "message": "Buyer"
}
🏷️ GET /users/sellers/lebelledsold/:houseId
Middleware: roleGuard(['admin', 'seller'])

Description: Mark an approved house as sold.

Rules:

House must be in approved status.

Requesting seller must own the house.

URL Parameters:

houseId (string) – ID of the house

Responses:

200 OK: House marked as sold.

401 Unauthorized: Not the owner.

422 Unprocessable Entity: House not approved.

500 Internal Server Error: Operation failed.

🧑‍💼 GET /users/admin
Middleware: roleGuard(['admin'])

Description: Endpoint accessible to admins only.

Response:

json
Copy
Edit
{
  "message": "admin"
}
✅ GET /users/admin/approve/:houseId
Middleware: roleGuard(['admin', 'Buyer'])

Description: Approve a house listing and email the seller.

URL Parameters:

houseId (string) – ID of the house

Responses:

200 OK: House approved and notification sent.

500 Internal Server Error: Operation failed.

❌ GET /users/admin/disapprove
Middleware: roleGuard(['admin'])

Description: Disapprove a house listing.

Responses:

200 OK: House disapproved.

500 Internal Server Error: Operation failed.
