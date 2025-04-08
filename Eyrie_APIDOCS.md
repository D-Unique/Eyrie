# 🛡️ Auth API Documentation

**Base Path**: `/auth`

---

## 📘 Endpoints

---

### 📝 POST `/auth/signup`

**Description**: Register a new user.

**Request Body**:
```json
{
    "fname": "John",
    "lname": "Doe",
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

**Responses**:
- **201 Created**: User created successfully.
- **400 Bad Request**: Missing required fields.
- **403 Forbidden**: User already exists.
- **500 Internal Server Error**: Unexpected failure.

---

### 🔐 POST `/auth/login`

**Description**: Authenticate a user and receive JWT tokens.

**Request Body**:
```json
{
    "email": "john.doe@example.com",
    "password": "securePassword123"
}
```

**Responses**:
- **200 OK**: Returns access and refresh tokens.
    ```json
    {
        "accessToken": "jwt-access-token",
        "refreshAccessToken": "jwt-refresh-token"
    }
    ```
- **400 Bad Request**: Missing fields.
- **401 Unauthorized**: Invalid credentials.
- **500 Internal Server Error**: Something went wrong.

---

### 🔄 POST `/auth/refreshToken`

**Description**: Generate a new access token using the refresh token.

**Request Body**:
```json
{
    "refreshAccessToken": "<refresh_token>"
}
```

**Responses**:
- **201 Created**: New access token issued.
    ```json
    {
        "accessToken": "new-jwt-access-token"
    }
    ```
- **400 Bad Request**: Refresh token not provided.
- **401 Unauthorized**: Token not found or expired in Redis.
- **403 Forbidden**: Invalid token signature or content.
- **500 Internal Server Error**: General failure.

---

### 🚪 POST `/auth/logout`

**Protected Route** ✅  
**Middleware**: `verifyJwtToken`

**Description**: Logs out the user by invalidating the refresh token.

**Request Body**:
```json
{
    "refreshAccessToken": "<refresh_token>"
}
```

**Responses**:
- **200 OK**: Logout successful.
- **400 Bad Request**: Missing refresh token.
- **500 Internal Server Error**: Logout process failed.

---

### 🌐 GET `/auth/google`

**Description**: Redirects user to Google OAuth login via Passport.

**Details**:
- Redirects to Google's OAuth2 consent screen.
- **Requested Scopes**:
    - `profile`
    - `email`

**Response**:
- Redirect to Google.

---

### 🔁 GET `/auth/google/callback`

**Description**: Callback endpoint for Google after OAuth login.

**Responses**:
- **200 OK**: Returns authenticated user data.
    ```json
    {
        "id": "user_id",
        "email": "user@example.com",
        "name": "User Full Name"
    }
    ```
- Handles failure using Passport’s built-in error handling.

---

## 🔐 Middleware

### `verifyJwtToken`

**Used on**: `POST /auth/logout`

**Description**: Validates the JWT access token in the request header.

**Behavior**: Attaches `req.payload` if valid; rejects otherwise.

---

## 🧠 Notes

- Redis is used to store refresh tokens with expiration.
- Passwords are hashed with `argon2` (because we're not savages).
- JWT access and refresh tokens are generated using secret keys.
- Logout requires a valid access token **AND** the refresh token being invalidated.

---
