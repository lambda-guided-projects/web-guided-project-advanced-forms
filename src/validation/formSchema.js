// Here goes the schema for the form
import * as yup from 'yup'

const formSchema = yup.object().shape({
    username: yup.string()
        .required('Username is required, please fill out.'),
    email: yup.string()
        .email('Must be a valid email address')
        .required('Email is required'),
    role: yup.string()
    .oneOf(['student', 'instructor', 'alumni', 'tl'], 'Role is required'),
    civil: yup.string()
        .oneOf(['married', 'single'], 'Civil status is required'),
   // Checkboxes are not required
    hiking: yup.boolean(),
    reading: yup.boolean(),
    coding: yup.boolean()
})