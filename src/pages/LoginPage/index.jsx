import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authSlice from "redux/auth/authSlice";
import { useLoginUserMutation } from "redux/phonebookApiQuery";
import { AuthForm } from "components/AuthForm";
import { FormPageContainer, FormWrapper, Title } from "components/ui";


const LoginPage = () => {
  const [loginUser, { data: loginData, error }] = useLoginUserMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    if (loginData?.user) dispatch(authSlice.actions.signin(loginData));
  }, [loginData, dispatch]);

  const handleSubmit = (values, { resetForm }) => {
    loginUser(values);
    resetForm();
  };

  return (
    <FormPageContainer>
      <FormWrapper>
        <Title>Please login to your account</Title>
        <AuthForm onSubmit={handleSubmit} error={error} type={"Log in"}/>
      </FormWrapper>
    </FormPageContainer>
  );
};

export default LoginPage;