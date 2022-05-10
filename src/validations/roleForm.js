export default function roleFormValidations(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Role name required";
  }
  return errors;
}
