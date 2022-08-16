import * as yup from 'yup';

export const yupPasswordValidation = ({
  password: yup
    .string()
    .required('Please, enter your password')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/,
      "Must contain 8 or more characters: uppercase, lowercase letters, a number and a special case character"
  ),
});

