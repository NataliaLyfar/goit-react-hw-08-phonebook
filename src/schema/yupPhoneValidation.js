import * as yup from 'yup';

export const yupPhoneValidation = ({
  number: yup.string().required().test({
      test: (value) => (/^[\d+][\d()-]{8,16}\d$/i).test(value),
  }),
});

