import styled from 'styled-components';
import { Field } from 'formik';

export const MainContainer = styled.div`
  display: inline-flex;
  width: 100%;
  height: 100vh;
  flex-direction: column;
  justify-content: center;
  background: #dcebf7;
`;
export const FormContainer = styled.div`
  max-width: 287px;
  border-radius: 8px;
  background: #fff;
  padding: 40px 24px;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 18px;
  @media (min-width: 768px) {
    max-width: 400px;
    padding: 40px;
    margin-bottom: 24px;
  }
  @media (min-width: 1440px) {
  }
`;
export const Title = styled.h1`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  // font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  margin-bottom: 32px;
  margin-top: 0;
  display: inline-block;

  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 40px;
  }
`;
export const LabelInput = styled.label`
  display: flex;
  flex-direction: column;
`;
export const SpanInputLogin = styled.span`
  color: ${props => props.$errLogin};
  // font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const SpanInputEmail = styled.span`
  color: ${props => props.$errEmail};
  // font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 24px;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;
export const SpanInputPass = styled.span`
  color: ${props => props.$errPass};
  // font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 8px;
  margin-top: 24px;

  @media (min-width: 768px) {
    font-size: 14px;
    margin-top: 18px;
  }
`;
export const LoginInput = styled(Field)`
  border-radius: 8px;
  border: ${props => props.$errLogin};
  background: #fff;
  max-width: 287px;
  height: 46px;
  padding: 0;
  padding-left: 12px;
  // font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  ::placeholder {
    color: #dce3e5;
    // font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }
  &:hover {
    border-color: #111111;
  }
  @media (min-width: 768px) {
    max-width: 400px;
    height: 54px;
    padding-left: 18px;
    font-size: 16px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
export const EmailInput = styled(Field)`
  border-radius: 8px;
  border: ${props => props.$errEmail};
  background: #fff;
  max-width: 287px;
  height: 46px;
  padding: 0;
  padding-left: 12px;
  // font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;

  ::placeholder {
    color: #dce3e5;
    // font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }
  &:hover {
    border-color: #111111;
  }
  @media (min-width: 768px) {
    max-width: 400px;
    height: 54px;
    padding-left: 18px;
    font-size: 16px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
export const PasswordInput = styled(Field)`
  border-radius: 8px;
  border: ${props => props.$errPass};
  background: #fff;
  max-width: 287px;
  height: 46px;
  padding: 0;
  padding-left: 8px;

  ::placeholder {
    color: #dce3e5;
    // font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px; /* 128.571% */
  }
  &:hover {
    border-color: #111111;
  }

  @media (min-width: 768px) {
    max-width: 400px;
    height: 54px;
    padding-left: 18px;
    font-size: 16px;
    ::placeholder {
      font-size: 16px;
    }
  }
`;
export const ErrorMsg = styled.p`
  color: #da1414;
  // font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
  margin-top: 8px;
  margin-bottom: -22px;
  padding-left: 12px;
`;
export const ButtonSubmit = styled.button`
  border-radius: 16px;
  background: #3e85f3;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  width: 100%;
  height: 46px;
  margin-top: 32px;
  border: none;
  color: #ffffff;
  // font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
  letter-spacing: -0.28px;
  &:hover {
    background: #2b78ef;
  }
  @media (min-width: 768px) {
    width: 400px;
    height: 56px;
    margin-top: 48px;
    font-size: 18px;
    line-height: 24px;
    letter-spacing: -0.36px;
  }
`;
export const ButtonSignup = styled.button`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  // font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  text-decoration-line: underline;
  border: none;
  background: #dcebf7;
  margin-right: auto;
  margin-left: auto;
  &:hover {
    color: #2b78ef;
  }
  @media (min-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const SignupContainer = styled.div`
  display: flex;
`;
export const GusContainer = styled.div`
  position: absolute;
  visibility: hidden;
  @media (min-width: 1440px) {
    bottom: 0;
    left: 60px;
    visibility: visible;
  }
`;