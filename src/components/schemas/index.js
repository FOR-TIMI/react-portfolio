import * as yup from 'yup';


export const sendEmailSchema = yup.object().shape({
    name: yup.string("Name must not be empty").required(),
    email: yup.string().email("Please enter a valid email").required(),
    subject: yup.string("The subject must not be empty").required(),
    message: yup.string("The message must not be empty").min(1).max(200).required(),
})