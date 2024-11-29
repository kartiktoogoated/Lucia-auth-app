Lucia Auth App

This is an authentication app built using Lucia Auth, supporting features like signup, login, and OAuth integration (currently with GitHub). The project is designed to be secure, scalable, and easy to extend with more authentication options.

Features

Lucia Auth Integration: Provides secure authentication using Lucia Auth.
OAuth Support: Currently integrated with GitHub for OAuth.
User Authentication: Includes signup and login functionality.
Form Validation: Uses robust validation for user input.
Installation

Clone the repository:
Copy code
git clone https://github.com/yourusername/lucia-auth-app.git
cd lucia-auth-app
Install the dependencies:
bash
Copy code
npm install
Set up environment variables by creating a .env file:
bash
Copy code
touch .env
Add your environment variables (e.g., Lucia Auth keys, GitHub OAuth keys) to the .env file.
Start the development server:
bash
Copy code
npm run dev
Usage

Navigate to http://localhost:3000 to access the application.
Use the sign-up form to create a new account or log in using existing credentials.
Alternatively, log in using your GitHub account through OAuth.
Technologies Used

Lucia Auth: Secure authentication management.
Next.js: For building the frontend and server-side rendering.
Node.js: Backend for handling server-side logic.
OAuth: GitHub authentication for secure third-party login.
Future Enhancements

Add support for more OAuth providers (e.g., Google, Twitter).
Implement email verification and password reset functionality.
Enhance form validation and error handling.
Contributing

Fork the project.
Create your feature branch (git checkout -b feature/new-feature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feature/new-feature).
Open a pull request.
License

This project is licensed under the MIT License.