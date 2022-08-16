import { useDispatch } from "react-redux";
import {setCredentials} from "redux/auth/authSlice";
import { useLoginUserMutation } from "redux/phonebookApiQuery";
import { AuthForm } from "components/AuthForm";
import { FormPageContainer, FormWrapper, Title } from "components/ui";
import { errorCatcher } from "helpers";


const LoginPage = () => {
  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();


  const handleSubmit = async (values, { resetForm }) => {
    try{
      const response = await loginUser(values).unwrap();
      dispatch(setCredentials(response));
    } catch (error){
      errorCatcher(false, error);
    };
    resetForm();
  };

  return (
    <FormPageContainer>
      <FormWrapper>
        <Title>Please login to your account</Title>
        <AuthForm onSubmit={handleSubmit} type={"Log in"}/>
      </FormWrapper>
    </FormPageContainer>
  );
};

export default LoginPage;