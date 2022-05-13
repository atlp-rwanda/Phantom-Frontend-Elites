export default function busesFormValidations(values) {
  const errors = {};

  // brand name validation
  if (!values.brand.trim()) {
    errors.brand = "Bus brand name required";
  }
  // pleate number validation
  if (!values.plateNo.trim()) {
    errors.plateNo = "Plate number required";
  }
  // seats validation
  if (!values.seats.trim()) {
    errors.seats = "Number of seats required";
  }

  return errors;
}
