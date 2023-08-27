import { Formik, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';

import {
  MainContainer,
  FormContainer,
  Title,
  LabelInput,
  SpanInputLogin,
  SpanInputEmail,
  SpanInputPass,
  LoginInput,
  EmailInput,
  ButtonSubmit,
  ButtonSignup,
  SignupContainer,
  ErrorMsg,
  PasswordInput,
  GusContainer,
} from './RegistrationForm.styled';

const userShema = object({
  name: string().required(),
  email: string().email('This is an ERROR email').required(),
  password: string().min(6).max(16).required(),
});

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegistrationForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
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
          <Title>Sign Up</Title>
          <Formik
            initialValues={initialValues}
            validationSchema={userShema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form>
                <LabelInput htmlFor="name">
                  <SpanInputLogin
                    $errLogin={errors.name && touched.name ? '#E74A3B' : '#111'}
                  >
                    Name
                  </SpanInputLogin>

                  <LoginInput
                    autoComplete="off"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    $errLogin={
                      errors.name && touched.name
                        ? ' 1px solid #E74A3B'
                        : ' 1px solid rgba(220, 227, 229, 0.6)'
                    }
                  />
                  <FormError name="name" />
                </LabelInput>

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
                <ButtonSubmit type="submit">Sign Up</ButtonSubmit>
              </Form>
            )}
          </Formik>
        </FormContainer>

        <SignupContainer>
          <ButtonSignup type="button" >
            Log In
          </ButtonSignup>
        </SignupContainer>
      </div>
      <GusContainer>
        <img
          src={require('../../images/registrationGus.png')}
          alt="rocket-gus"
          height={416}
          width={400}
        />
      </GusContainer>
    </MainContainer>
  );
};

export default RegistrationForm;
