import React, { useEffect, useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

interface LoginFormValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const [rememberedEmail, setRememberedEmail] = useState<string | null>(null);

  useEffect(() => {
    const storedEmail = localStorage.getItem('email');
    if (storedEmail) {
      setRememberedEmail(storedEmail);
    }
  }, []);

  const initialValues: LoginFormValues = {
    email: rememberedEmail || '',
    password: '',
    rememberMe: rememberedEmail ? true : false,
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  const handleSubmit = (values: LoginFormValues) => {
    if (values.rememberMe) {
      localStorage.setItem('email', values.email);
    } else {
      localStorage.removeItem('email');
    }

    alert('Login Successful');
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
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
          <ErrorMessage
            name="email"
            component="div"
            className="validation-error"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <Field
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            aria-label="Password"
          />
          <ErrorMessage
            name="password"
            component="div"
            className="validation-error"
          />
        </div>

        <div className="checkbox-container">
          <Field type="checkbox" name="rememberMe" id="rememberMe" />
          <label htmlFor="rememberMe">Remember Me</label>
        </div>
        
        <button type="submit">Login</button>
        <p>
          Not a member? <Link to="/signup">Signup</Link>
        </p>
      </Form>
    </Formik>
  );
};

export default Login;
