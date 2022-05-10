export default function permissionFormValidations(values) {
  const errors = {};

  if (!values.name.trim()) {
    errors.name = "Permission name required";
  }
  return errors;
}
