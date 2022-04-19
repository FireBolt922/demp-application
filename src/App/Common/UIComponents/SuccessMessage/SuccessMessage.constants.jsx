/* eslint no-template-curly-in-string: "off" */
export const SIGNUP_SUCCESS_EVENT = 'signup_successfull';
export const FORGOT_PASSWORD_SUCCESS_EVENT = 'forgot_password_successfull';
export const ACCOUNT_VERIFICATION_SUCCESS_EVENT =
  'account_verified_successfull';
export const MESSAGE_OPTIONS = Object.freeze({
  [`${SIGNUP_SUCCESS_EVENT}`]: 'Your account has been successfully created. We have sent a verification mail to ${email}. \nClick on the link in the mail to confirm.',
  [`${FORGOT_PASSWORD_SUCCESS_EVENT}`]: 'We have sent a link to reset the password in a mail to ${email}. \nClick on the link in the mail to confirm.',
  [`${ACCOUNT_VERIFICATION_SUCCESS_EVENT}`]: 'We have verified ${email} successfully. \n Please wait while we are redirecting you to login page',
});
