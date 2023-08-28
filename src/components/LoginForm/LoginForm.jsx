import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import { login } from '../../redux/auth/auth-operations';
import { useDispatch } from 'react-redux';

import {
  MainContainer,
  FormContainer,
  Title,
  LabelInput,
  SpanInputEmail,
  SpanInputPass,
  EmailInput,
  ButtonSubmit,
  ButtonSignup,
  SignupContainer,
  ErrorMsg,
  PasswordInput,
  GusContainer,
} from './LoginForm.styled';

const userShema = object({
  email: string().email('This is an ERROR email').required(),
  password: string().min(6).max(16).required(),
});

const initialValues = {
  email: '',
  password: '',
};

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  const FormError = ({ name }) => {
    return (
      <ErrorMessage name={name} render={msg => <ErrorMsg>{msg}</ErrorMsg>} />
    );
  };

  return (
    <MainContainer>
      <div>
        <FormContainer>
          <Title>Log In</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={userShema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <LabelInput htmlFor="email">
                  <SpanInputEmail
                    $errEmail={
                      errors.email && touched.email ? '#E74A3B' : '#111'
                    }
                  >
                    Email
                  </SpanInputEmail>

                  <EmailInput
                    autoComplete="off"
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    $errEmail={
                      errors.email && touched.email
                        ? ' 1px solid #E74A3B'
                        : ' 1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  <FormError name="email" />
                </LabelInput>
                <LabelInput htmlFor="password">
                  <SpanInputPass
                    $errPass={
                      errors.password && touched.password ? '#E74A3B' : '#111'
                    }
                  >
                    Password
                  </SpanInputPass>

                  <PasswordInput
                    autoComplete="off"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    $errPass={
                      errors.password && touched.password
                        ? ' 1px solid #E74A3B'
                        : ' 1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  <FormError name="password" />
                </LabelInput>
                <ButtonSubmit type="submit">Log In</ButtonSubmit>
              </Form>
            )}
          </Formik>
        </FormContainer>

        <SignupContainer>
          <ButtonSignup type="button">Sign Up</ButtonSignup>
        </SignupContainer>
      </div>
      <GusContainer>
        <img
          src={require('../../images/loginGus.png')}
          alt="rocket-gus"
          height={521}
          width={368}
        />
      </GusContainer>
    </MainContainer>
  );
};

export default LoginForm;
