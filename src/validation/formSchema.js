import * as yup from 'yup'

export const schema = yup.object().shape({
  username: yup.string().min(3, "Must be at least 3 characters!").required("Username is required!"),
  email: yup.string().email("Must be a valid email!").required("Email is required!"),
  role: yup.string().oneOf(['instructor', 'tl', 'student', 'alumni']).required(),
  civil: yup.string().oneOf(['married', 'single']).required(),
  hiking: yup.boolean(),
  reading: yup.boolean(),
  coding: yup.boolean(),
}) 