import { SignUpForm } from "components/AuthForms";
import { FormPageContainer, FormWrapper, Title } from "components/ui";


const SignUpPage = () => {
  return (
    <FormPageContainer>
      <FormWrapper>
        <Title>Create your free account!</Title>
        <SignUpForm/>
      </FormWrapper>
    </FormPageContainer> 
  );
};

export default SignUpPage;