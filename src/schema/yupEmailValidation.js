import * as yup from 'yup';

export const yupEmailValidation = ({
    email: yup.string().email('Invalid email address format').required('Please, enter your email')
});