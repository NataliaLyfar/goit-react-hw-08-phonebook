import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { yupPhoneValidation } from 'schema';
import { toast } from 'react-toastify';
import { FaUserPlus, FaPhoneAlt } from "react-icons/fa";
import { Label, 
         PrimaryButton, 
         FormError, 
         StyledForm, 
         FormInput } from "components/ui";
import { 
  useUpdateContactMutation,
  useGetContactsQuery,
 } from "redux/phonebookApiQuery";
import { PhoneInputField } from './PhoneInputField';


export const UpdateForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = useParams();
  const [url, setUrl] = useState(location.state.from);
  const [updateContact, { isLoading }] = useUpdateContactMutation();
  const { data: contacts } = useGetContactsQuery();

  const initialValues = {
    name: '',
    number: ''
  };
  
  const schema = yup.object({
    ...yupPhoneValidation,
    name: yup.string().required(),
  });

  const handleSubmit = (values, {resetForm}) => {
    const isContactExist = contacts?.find(({name}) => name.toLowerCase() === values.name.toLowerCase());
    if(isContactExist){
      return toast.info(`${values.name} is already in contacts`);
    };
    updateContact({id, ...values});
    setUrl(null);
    navigate(url);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>  
        <StyledForm>
            <Label htmlFor='name'><FaUserPlus/>Name</Label>
            <FormInput type='text' name='name'/>
            <FormError name="name"/>
            <Label htmlFor='number'><FaPhoneAlt/>Number</Label>
            <Field
            type="tel" name="number" country={'ua'} regions={'europe'}
            component={PhoneInputField}
            />
            <FormError name="number"/>
            <PrimaryButton type='submit'
             disabled={isLoading}
             aria-label="update contact button">
              Update contact
            </PrimaryButton>
        </StyledForm>
    </Formik>
  );
};
