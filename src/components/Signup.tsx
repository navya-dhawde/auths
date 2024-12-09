import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

interface SignUpFormValues {
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = () => {
  const [isTyping, setIsTyping] = useState(false);

  const initialValues: SignUpFormValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      .required('Confirm Password is required'),
  });

  const handleSubmit = (values: SignUpFormValues) => {
    alert('Sign Up Successful');
    console.log(values);
  };

  const getPasswordStrength = (password: string) => {
    let strength = 0;

    if (password.length > 8) strength += 1;
    if (/[A-Z]/.test(password)) strength += 1;
    if (/[a-z]/.test(password)) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[^A-Za-z0-9]/.test(password)) strength += 1;

    if (strength === 5) return 'Strong';
    if (strength >= 3) return 'Medium';
    return 'Weak';
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ values, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              aria-label="Email"
            />
            <ErrorMessage name="email" component="div" className="validation-error" />
          </div>

          <div>
            <label htmlFor="password">Password</label>
            <Field
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              aria-label="Password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setIsTyping(true); 
                setFieldValue('password', e.target.value);
              }}
            />
            {isTyping && (
              <div
                className="pass"
                style={{
                  color:
                    getPasswordStrength(values.password) === 'Weak'
                      ? 'red'
                      : getPasswordStrength(values.password) === 'Medium'
                      ? '#B8860B'
                      : 'green',
                }}>
                Password Strength: {getPasswordStrength(values.password)}
              </div>
            )}
            <ErrorMessage name="password" component="div" className="validation-error" />
          </div>

          <div>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <Field
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Confirm your password"
              aria-label="Confirm Password"
            />
            <ErrorMessage name="confirmPassword" component="div" className="validation-error" />
          </div>

          <button type="submit">Sign Up</button>
          <p>
            Already a member? <Link to="/">Login</Link>
          </p>
        </Form>
      )}
    </Formik>
  );
};

export default Signup;
