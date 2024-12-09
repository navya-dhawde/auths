# React Sign Up and Login Form with Formik

This is a simple React application with two forms: **Sign Up** and **Login**. The application uses **Formik** for form handling and validation, **TypeScript**.

## Features:
- **Sign Up and Login Forms** with validation using Formik.
- **Password Strength Indicator** in the Sign Up form.
- **Remember Me** functionality in the Login form, which saves the email in local storage if checked.
- **Success Messages** displayed upon successful form submission.

## Design Choices:
- **Formik** is used to handle form state and validation.
- **TypeScript** is used to ensure type safety across the application and prevent potential runtime errors.
- The forms are designed to be simple and intuitive, with clear labels and error messages.
- **Custom CSS** is used to style the forms in a clean, minimalistic way.
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
3. **Install dependencies:** Make sure you have Node.js installed. Then, run the following command to install the required dependencies:
   ```bash
   npm install
   ```
4. **Start the development server:**:
   ```bash
   npm start
   ```

## Design Considerations:

### User Experience (UX):

- **Form Validation**: Each form has validation rules that give users immediate feedback on errors (e.g., "Password must be at least 8 characters"). The validation messages are clear and concise to guide the user.
- **Success Messages**: After a successful form submission, a success message is shown, ensuring the user knows their action was successful.
- **Password Strength Indicator**: For the Sign Up form, the password strength indicator provides users with real-time feedback as they type, helping them choose a stronger password.

### Accessibility (A11y):

- Proper **ARIA roles** and **labels** are used to make the form accessible to screen readers and ensure a better experience for users with disabilities.
- **Error Messages** are displayed in a way that they are easy to read and understand.

## Assumptions & Limitations:

### Assumptions:
- This app assumes the user is familiar with web forms and basic input validation concepts.
- The project assumes that the backend API for actual authentication (e.g., user registration or login) is not available, so only a simulated success message is shown upon form submission.

### Limitations:
- The form does not yet handle form submission errors from an API.
- The app only uses local state for form handling and does not make API calls for authentication (this would require integration with a backend service).
- **Password Strength** is evaluated based on simple rules and does not use advanced algorithms or password scoring systems.

