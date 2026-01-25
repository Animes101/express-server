  import Joi from 'joi';
  
  
  
  const createStudentSchema = Joi.object({
  name: Joi.string()
    .min(3)
    .max(50)
    .required()
    .custom((value) => {
      // Capitalize first letter
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase();
    }),

  password: Joi.string()
    .min(6)
    .required(),

  age: Joi.number()
    .min(1)
    .required(),

  gender: Joi.string()
    .valid('MALE', 'FEMALE', 'OTHER')
    .required(),

  dateOfBirts: Joi.string()
    .required(),

  bladGroup: Joi.string()
    .valid('A+','A-','B+','B-','AB+','AB-','O+','O-')
    .required(),

  address: Joi.string()
    .required(),

  grade: Joi.string()
    .required(),

  email: Joi.string()
    .email()
    .required(),

  phoneNumber: Joi.number()
    .required(),

  gurdian: Joi.object({
    fatherName: Joi.string().required(),
    motherName: Joi.string().required(),
    phone: Joi.number().required(),
  }).required(),

  depermant: Joi.string()
    .required(),

  isActive: Joi.string()
    .valid('active', 'inactive')
    .required(),
});

export default createStudentSchema
