import * as yup from "yup";
export const productSchema = yup.object({
  name: yup.string().required("This field cannot be empty"),
  visitors: yup
    .number()
    .typeError("This field cannot be empty")
    .required("This field cannot be empty"),
  price: yup
    .number()
    .integer()
    .typeError("This field cannot be empty")
    .required(),
  sales: yup
    .number()
    .integer()
    .typeError("This field cannot be empty")
    .required(),
  month: yup.string().required("Choose one Option"),
});

export const visitorSchema = yup.object({
  visitors: yup
    .number()
    .typeError("Enter no. of visitors")
    .required(),
  premiumUsers: yup
    .number()
    .integer()
    .typeError("Enter no. of Premium Users")
    .required(),
  location: yup.string().required('Enter the Location e.g (India)'),
    device:yup.string().required('Choose Device first'),
  month: yup.string().required("Choose Month first"),
});
