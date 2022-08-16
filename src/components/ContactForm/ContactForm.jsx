import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { yupPhoneValidation } from 'schema';
import { toast } from 'react-toastify';
import { FaUserPlus, FaPhoneAlt } from "react-icons/fa";
import { Label,
         TertiaryButton, 
         FormError, 
         StyledForm, 
         FormInput } from "components/ui";
import { 
  useCreateContactMutation,
  useGetContactsQuery,
 } from "redux/phonebookApiQuery";
import { PhoneInputField } from './PhoneInputField';


export const ContactForm = () => {
  const [createContact] = useCreateContactMutation();
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
    createContact(values);
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
            <TertiaryButton type='submit'>
              Add contact
            </TertiaryButton>
        </StyledForm>
    </Formik>
  );
};



