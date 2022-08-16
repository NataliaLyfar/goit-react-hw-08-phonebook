import { useState, useEffect } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { yupEmailValidation, yupPasswordValidation } from 'schema';
import { toast } from "react-toastify";
import { FaUserPlus, FaRegEye } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Label, 
         PrimaryButton, 
         ShowPasswordButton, 
         FormError, 
         StyledForm, 
         FormInput, 
         InputWrapper} from "components/ui";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';


export const AuthForm = ({onSubmit, type, error, register = false}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  useEffect(() => {
    if (error?.status === 400) {
      if(error?.data?.name === "MongoError") toast.error(`User already exists! Try again!`);
      if(error?.data?.message) toast.error(`${error?.data?.message}`);
      if(!register)toast.error(`Incorrect email or password. Try again!`);
    };
    if (error?.status === 404) toast.error(`Сonnection error 404! Try later!`);
    if (error?.status === 500) toast.error(`Server error! Try again!`);
  }, [error, register]);
  
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
      
  const schema = register ? 
  yup.object({
    ...yupPasswordValidation,
    ...yupEmailValidation,
    name: yup.string().required('Please, enter your name'),
  }) : 
  yup.object({
    ...yupPasswordValidation,
    ...yupEmailValidation,
  });
    
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={onSubmit}>
        <StyledForm noValidate>
          {register && (
            <>
              <Label htmlFor='name'><FaUserPlus/>Name</Label>
              <FormInput type='name' name='name'/>
              <FormError name="name"/>
            </>
          )}
            <Label htmlFor='email'><MdAttachEmail/>Email</Label>
            <FormInput type='email' name='email'/>
            <FormError name="email"/>
            <Label htmlFor='password'>Password</Label>
            <InputWrapper>
              <FormInput type={passwordShown ? 'text' : 'password'} name="password"/>
                <OverlayTrigger
                placement="top"
                overlay={<Tooltip id="password button tooltip">show password</Tooltip>}>
                  <ShowPasswordButton
                    onClick={togglePassword}
                    type="button">
                    <FaRegEye size={30} />
                  </ShowPasswordButton>
                </OverlayTrigger>
            </InputWrapper>
            <FormError name="password"/>
            <PrimaryButton type='submit'>
              {type}
            </PrimaryButton>  
        </StyledForm>
    </Formik>
  );
};


