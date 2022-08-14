import { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { yupPasswordValidation } from 'schema';
import { useDispatch } from 'react-redux';
import authOperations  from 'redux/auth/authOperations';
import { FaUserPlus, FaRegEye } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { Label, 
         PrimaryButton, 
         ShowPasswordButton, 
         FormError, 
         FormContact, 
         FormInput, 
         InputWrapper} from "components/ui";
import { OverlayTrigger, Tooltip } from 'react-bootstrap';



export const SignUpForm = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const dispatch = useDispatch();

  const initialValues = {
    name: '',
    email: '',
    password: '',
  };
      
  const schema = yup.object({
    ...yupPasswordValidation,
    name: yup.string().required('Please, enter your name'),
    email: yup.string().email().required('Please, enter your email'),
  });
    
  const handleSubmit = (values, {resetForm}) => {
    dispatch(authOperations.register(values));
    resetForm();
  };
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>  
        <FormContact>
            <Label htmlFor='name'><FaUserPlus/>Name</Label>
            <FormInput type='name' name='name'/>
            <FormError name="name"/>
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
              Sign Up
            </PrimaryButton>
        </FormContact>
    </Formik>
  );
};


