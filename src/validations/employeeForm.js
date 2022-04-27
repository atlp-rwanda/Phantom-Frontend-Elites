export default function employeeFormValidations(values) {
  const errors = {};

  // first name validation
  if (!values.firstname.trim()) {
    errors.firstname = "First name required";
  }
  // last name validation
  if (!values.lastname.trim()) {
    errors.lastname = "Last name required";
  }
  // email validation
  if (!values.email) {
    errors.email = "Email required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }
  // gender validation
  if (!values.gender) {
    errors.gender = "Select a gender";
  }
  // role validation
  if (!values.role) {
    errors.role = "Select a role";
  }

  return errors;
}
