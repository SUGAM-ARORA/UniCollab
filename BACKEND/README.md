## Backend
Uses Express js

## Features

- User Sign-Up
- User Login
- User Logout
- Protected Routes


### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/SUGAM-ARORA/UniCollab
    cd backend
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Create a `.env` file in the root directory with the following contents:**

    ```env
    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/mydatabase
    JWT_SECRET=your_jwt_secret
    ```

4. **Start the application:**

    ```bash
    node index.js
    ```

    The server will start on `http://localhost:5000`.

### API Endpoints

- **Sign-Up**

    ```
    POST /auth/signup
    ```

    **Body:**
    ```json
    {
      "username": "yourusername",
      "email": "your.email@example.com",
      "password": "yourpassword"
    }
    ```

- **Login**

    ```
    POST /auth/login
    ```

    **Body:**
    ```json
    {
      "email": "your.email@example.com",
      "password": "yourpassword"
    }
    ```

    **Response:**
    - Sets a cookie named `token` with the JWT.

- **Logout**

    ```
    POST /auth/logout
    ```

    **Response:**
    - Clears the `token` cookie.

- **Protected Route**

    ```
    GET /protected
    ```

    **Headers:**
    - Requires `token` cookie set.

    **Response:**
    ```json
    {
      "message": "Hello <username>, this is a protected route."
    }
    ```


## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute.


