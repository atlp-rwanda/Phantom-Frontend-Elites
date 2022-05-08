export default function employeeFormValidations(values) {
  const errors = {};

  // full name validation
  if (!values.fullname.trim()) {
    errors.fullname = "fullname is required";
  }
  // email validation
  if (!values.email) {
    errors.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(values.email)
  ) {
    errors.email = "Email address is invalid";
  }
  // phone validation
  if (!values.telnumber.trim()) {
    errors.telnumber = "Phone number is required";
  } else if (!/^[0-9]{10}$/g.test(values.telnumber)) {
    errors.telnumber = "phone number is invalid";
  }

  // message validation
  if (!values.message.trim()) {
    errors.message = "Message field must not be empty";
  }

  return errors;
}
