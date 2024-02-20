import * as yup from "yup";
export const productSchema = yup.object({
    name: yup.string().required('This field cannot be empty'),
    visitors: yup.number().typeError('This field cannot be empty').required('This field cannot be empty'),
    price: yup.number().integer().typeError('This field cannot be empty').required(),
    sales: yup.number().integer().typeError('This field cannot be empty').required(),
    month:yup.string().required('Choose one Option')
  });