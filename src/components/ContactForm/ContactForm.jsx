import { Field, Formik } from 'formik';
import * as yup from 'yup';
import { yupPhoneValidation } from 'schema';
import { toast } from 'react-toastify';
import { FaUserPlus, FaPhoneAlt } from "react-icons/fa";
import { Label,
         TertiaryButton, 
         FormError, 
         FormContact, 
         FormInput } from "components/ui";
import { 
  useCreateContactsMutation,
  useGetContactsQuery,
 } from "redux/contacts/contactsApi";
import { PhoneInputField } from './PhoneInputField';



export const ContactForm = () => {
  const [createContact, { isLoading }] = useCreateContactsMutation();
  const { data } = useGetContactsQuery();

  const initialValues = {
    name: '',
    number: ''
  };
  
  const schema = yup.object({
    ...yupPhoneValidation,
    name: yup.string().required(),
  });

  const handleSubmit = (values, {resetForm}) => {
    const isContactExist = data.find(({name}) => name.toLowerCase() === values.name.toLowerCase());
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
        <FormContact>
            <Label htmlFor='name'><FaUserPlus/>Name</Label>
            <FormInput type='text' name='name'/>
            <FormError name="name"/>
            <Label htmlFor='number'><FaPhoneAlt/>Number</Label>
            <Field
            type="tel" name="number" country={'ua'} regions={'europe'}
            component={PhoneInputField}
            />
            <FormError name="number"/>
            <TertiaryButton type='submit' disabled={isLoading}>
              Add contact
            </TertiaryButton>
        </FormContact>
    </Formik>
  );
};



