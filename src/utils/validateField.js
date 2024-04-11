import { validators } from './validators/index';

export const validateField = (fieldName, value) => {
  let errorMessage = '';

  const errorActions = {
    booking_firstName: () =>
      !validators.name.test(value) && '*Name can only have letters',

    booking_lastName: () =>
      !validators.name.test(value) && '*Lastame can only have letters',

    booking_email: () =>
      !validators.email.test(value) && '*Invalid email. e.g., test@example.com',

    booking_phone: () =>
      !validators.phone.test(value) && '*Phone can only have number',

    booking_persons: () =>
      !validators.persons.test(value) && '*Must be a number',
  };
  errorMessage = errorActions[fieldName]();

  return errorMessage;
};
