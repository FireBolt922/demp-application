export const OLD_PASSWORD_ENTRY_RULE = [
  // This Rules is used to restrict blank values
  {
    required: true,
    message: 'Please enter old password!',
  },
];
export const PASSWORD_VALIDATION_RULE = [
  // This rule is for password validation while setting new password
  {
    required: true,
    message: 'Please input your password!',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (
        !value ||
        getFieldValue('newPassword').match(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^`_"~<>:/+/\\{}:;,=?'()[+(.*?)\]+//-])[A-Za-z\d@$!%*?&#^`_"~<>:/+/\\{}:;,=?'()/[+(.*?)\]+//-]{8,}$/,
        )
      ) {
        return Promise.resolve();
      }
      return Promise.reject(
        new TypeError(
          'Please Enter 8 letter Aplha-numeric Password with Special character',
        ),
      );
    },
  }),
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (
        value &&
        getFieldValue('newPassword') === getFieldValue('oldPassword')
      ) {
        return Promise.reject(
          new TypeError('Old password and new password cannot be same'),
        );
      }
      return Promise.resolve();
    },
  }),
];
export const MATCH_CONFIRM_PASSWORD_RULE = [
  // This rules is used to check the password entered and confirm password
  {
    required: true,
    message: 'Please confirm your password!',
  },
  ({ getFieldValue }) => ({
    validator(_, value) {
      if (!value || getFieldValue('newPassword') === value) {
        return Promise.resolve();
      }
      return Promise.reject(
        new TypeError('The two passwords that you entered do not match!'),
      );
    },
  }),
];
