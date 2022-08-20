import { Formik } from 'formik';
import * as yup from 'yup';
import { yupPhoneValidation } from 'schema';
import { FaUserPlus, FaPhoneAlt } from "react-icons/fa";
import { Label,
         TertiaryButton,
         PrimaryButton, 
         FormError, 
         StyledForm, 
         FormInput } from "components/ui";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';


export const ContactForm = ({handleSubmit, initialValues, isLoading, update=false}) => {
  const schema = yup.object({
    ...yupPhoneValidation,
    name: yup.string().required(),
  });

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleSubmit}>
        {({values, handleChange, handleBlur}) => (
        <StyledForm>
            <Label htmlFor='name'><FaUserPlus/>Name</Label>
            <FormInput type='text' name='name'/>
            <FormError name="name"/>
            <Label htmlFor='number'><FaPhoneAlt/>Number</Label>
            <PhoneInput
                  inputProps={{
                    name: 'number',
                  }}
                  country={'ua'}
                  placeholder=''
                  onChange={(phoneNumber, country, e) => {
                    handleChange(e);
                  }}
                  onBlur={handleBlur}
                  value={values.number}
                />
            <FormError name="number"/>
            {update ? (
              <PrimaryButton type='submit'
                disabled={isLoading}
                aria-label="update contact button">
                Update contact
              </PrimaryButton>
            ) : (
              <TertiaryButton disabled={isLoading} type='submit'>
                Add contact
              </TertiaryButton>
            )
          }
        </StyledForm>
        )}
    </Formik>
  );
};



