# React Sign Up and Login Form with Formik

This is a simple React application with two forms: **Sign Up** and **Login**. The application uses **Formik** for form handling and validation, **TypeScript** for type safety, and includes accessibility features and UX best practices. The Sign Up form also includes a password strength indicator.

## Features:
- **Sign Up and Login Forms** with validation using Formik.
- **Password Strength Indicator** in the Sign Up form.
- **Remember Me** functionality in the Login form, which saves the email in local storage if checked.
- **Success Messages** displayed upon successful form submission (e.g., "Sign Up Successful" or "Login Successful").
- **Accessibility Features** such as proper ARIA roles and labels.

## Design Choices:
- **Formik** is used to handle form state and validation, providing a clean and scalable solution for form management.
- **TypeScript** is used to ensure type safety across the application and prevent potential runtime errors.
- The forms are designed to be simple and intuitive, with clear labels and error messages.
- **Custom CSS** is used to style the forms in a clean, minimalistic way without third-party UI libraries (e.g., Material-UI, Ant Design).
- The password strength indicator uses a simple logic based on length, uppercase, lowercase, number, and special character checks.
- **Remember Me** functionality allows users to stay logged in for a better user experience.

## How to Run the Project:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/react-signup-login.git
   ```
2. **Navigate to the project directory:**:
   ```bash
   cd react-signup-login
   ```
3. **Install dependencies:** Make sure you have Node.js installed. If not, download Node.js first. Then, run the following command to install the required dependencies:
   ```bash
   npm install
   ```
4. **Start the development server:**:
   ```bash
   npm start
   ```
