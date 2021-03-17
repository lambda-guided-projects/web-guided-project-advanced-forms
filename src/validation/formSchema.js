// Here goes the schema for the form
import * as yup from 'yup'

export const exampleSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  age: yup.number().required('Age is required').positive().integer(),
})

export const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required('Username is required')
    .min(4, 'Username must be at least 4 characters long'),
  email: yup
    .string()
    .email('Must be valid email')
    .required('Email is Required'),
  role: yup
    .string()
    .oneOf(['instructor', 'student', 'alumni', 'tl'], 'Role is required'),
  civil: yup
    .string()
    .oneOf(['single', 'married'], 'Civil status is required'),
  coding: yup.boolean(),
  reading: yup.boolean(),
  hiking: yup.boolean(),
})