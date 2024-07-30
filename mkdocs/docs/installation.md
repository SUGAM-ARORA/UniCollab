# 🛠️ Installation

### Prerequisites
- Node.js and npm installed
- MongoDB set up
- Firebase account

### Steps
1. **Clone the repository:**
    ```sh
    git clone https://github.com/SUGAM-ARORA/UniCollab.git
    cd UniCollab
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Set up environment variables:**
    - Create a `.env` file in the root directory.
    - Add your MongoDB URI, Firebase credentials, and other required variables.

4. **Start the development server:**
    ```sh
    npm start
    ```

5. **Open your browser and navigate to:**
    ```
    http://localhost:3000
    ```

## Building the Project
- To build the project for production, run:
    ```sh
    npm run build
    ```

## Deployment
- Follow the deployment instructions for your chosen platform (AWS, Firebase, etc.).

## Firebase Setup Steps

- Create Firebase Project: Go to Firebase Console and create a new project.
- Add Firebase App: Click on "Add App" and select "Web" to register your app.
- Install Firebase Admin SDK: Use npm install firebase-admin to install the SDK in your Node.js project.
- Download Service Account Key: Navigate to "Project Settings" > "Service Accounts" in Firebase Console and generate a new private key.
- Initialize Firebase Admin: Import the SDK and initialize it using your service account key:
```sh
    const admin = require('firebase-admin');
    const serviceAccount = require('./path/to/serviceAccountKey.json');

    admin.initializeApp({
     credential: admin.credential.cert(serviceAccount),
     databaseURL: "https://your-project-id.firebaseio.com"
      });

```

- Enable Authentication Providers: In Firebase Console, go to "Authentication" > "Sign-in Method" and enable Google, Facebook, LinkedIn, Twitter, GitHub, and Microsoft.
- Configure OAuth Credentials: Obtain OAuth client IDs and secrets from each provider's developer portal and configure them in the Firebase Console.
- Set Up Firebase Cloud Functions: Deploy serverless functions via the Firebase CLI by running firebase init functions.
- Install Firebase Functions SDK: Inside the functions directory, run npm install firebase-functions.
- Secure Endpoints with Middleware: Implement Express.js middleware to verify Firebase ID tokens for protected routes:
```sh
async function authenticateToken(req, res, next) {
  const idToken = req.header('Authorization').split('Bearer ')[1];
  try {
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).send('Unauthorized');
  }
}
app.use(authenticateToken);

```

- Test Authentication Flow: Ensure each provider's authentication flow works as expected by testing sign-in and token verification.

<p align="right"><a href="#top" style="font-size: 29px;">🔝</a></p>