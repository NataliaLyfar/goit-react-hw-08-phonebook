import * as yup from 'yup';

export const yupPhoneValidation = ({
  number: yup.string().required().min(5).max(30),
});

