export default function changePasswordFormValidations(values) {
  const errors = {};

  // inputs validation
  if (!values.currentPassword.trim()) {
    errors.currentPassword = "This field must be filled";
  }
  if (!values.newPassword.trim()) {
    errors.newPassword = "This field must be filled";
  } else if (values.newPassword.length < 8) {
    errors.newPassword = "The password should at least be 8 characters";
  }
  if (!values.confirmPassword.trim()) {
    errors.confirmPassword = "This field must be filled";
  } else if (values.newPassword !== values.confirmPassword) {
    errors.confirmPassword = "The password must match";
  }

  return errors;
}
