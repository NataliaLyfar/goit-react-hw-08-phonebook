import { LogInForm } from "components/AuthForms/LogInForm";
import { FormPageContainer, FormWrapper, Title } from "components/ui";


const LoginPage = () => {
  return (
    <FormPageContainer>
      <FormWrapper>
        <Title>Please login to your account</Title>
        <LogInForm />
      </FormWrapper>
    </FormPageContainer>
  );
};

export default LoginPage;