
import { useDispatch } from "react-redux";
import {setCredentials} from "redux/auth/authSlice";
import { useRegisterUserMutation } from "redux/phonebookApiQuery";
import { AuthForm } from "components/AuthForm";
import { FormPageContainer, FormWrapper, Title } from "components/ui";
import { errorCatcher } from "helpers";


const SignUpPage = () => { 
const [ registerUser] = useRegisterUserMutation();
const dispatch = useDispatch();


const handleSubmit = async (values, { resetForm }) => {
  try{
    const response = await registerUser(values).unwrap();
    dispatch(setCredentials(response));
  } catch (error){
    errorCatcher(true, error);
  };
  resetForm();
};

return (
  <FormPageContainer>
    <FormWrapper>
      <Title>Create your free account!</Title>
      <AuthForm onSubmit={handleSubmit}  register={true} type={'Sign Up'} />
    </FormWrapper>
  </FormPageContainer> 
  );
};

export default SignUpPage;