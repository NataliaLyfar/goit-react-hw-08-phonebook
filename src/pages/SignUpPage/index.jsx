import { useEffect } from "react";
import { useDispatch } from "react-redux";
import authSlice from "redux/auth/authSlice";
import { useRegisterUserMutation } from "redux/phonebookApiQuery";
import { AuthForm } from "components/AuthForm";
import { FormPageContainer, FormWrapper, Title } from "components/ui";


const SignUpPage = () => { 
const [ registerUser, {data: registerData, error}] = useRegisterUserMutation();
const dispatch = useDispatch();

useEffect(() => {
  if (registerData?.user) dispatch(authSlice.actions.signin(registerData));
}, [registerData, dispatch]);

const handleSubmit = (values, {resetForm}) => {
  registerUser(values);
  resetForm();
};

return (
  <FormPageContainer>
    <FormWrapper>
      <Title>Create your free account!</Title>
      <AuthForm onSubmit={handleSubmit} error={error} register={true} type={'Sign Up'} />
    </FormWrapper>
  </FormPageContainer> 
  );
};

export default SignUpPage;