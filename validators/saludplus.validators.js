const { param, body } = require("express-validator");

const createPacienteValidator = [
  body("Dui")
  .isString()
  .withMessage("Dui debe ser un string")
  .trim()
  .isLength({ min: 4, max: 240 }),

  body("firstNames")
    .isString()
    .withMessage("1er nombre debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("lastNames")
    .isString()
    .withMessage("Los apellDUIos deben ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("phone")
  .optional()
  .isString()
  .withMessage('phone debe ser un string')
  .trim()
  .isLength({ max: 12 })
  .withMessage('phone no debe tener más de 12 caracteres'),

  body("sex")
    .isString()
    .withMessage("sex debe ser un string")
    .trim()
    .isLength({ min: 4, max: 10 }),

  body("civilStatus")
    .isString()
    .withMessage("civilStatus debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("civilStatus debe tener entre 4 y 240 caracteres"),

  body("occupation")
    .isString()
    .withMessage("occupation debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("occupation debe tener entre 4 y 240 caracteres"),

  body("homeAddress")
    .isString()
    .withMessage("homeAddress debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("homeAddress debe tener entre 4 y 240 caracteres"),

  body("weight")
    .isNumeric()
    .withMessage("weight debe ser un numero")
    .isInt({ min: 0, max: 999 })
    .withMessage("weight should be between 0 and 999"),

  body("height")
    .isNumeric()
    .withMessage("height debe ser un numero")
    .isInt({ min: 0, max: 999 })
    .withMessage("height should be between 0 and 999"),

  body("symptoms")
    .isString()
    .withMessage("symptoms debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("symptoms debe tener entre 4 y 240 caracteres"),

  body("allergies")
    .isString()
    .withMessage("allergies debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("allergies debe tener entre 4 y 240 caracteres"),

  body("preExistingConditions")
    .isString()
    .withMessage("preExistingConditions debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("preExistingConditions debe tener entre 4 y 240 caracteres"),

    body("birthdate")
    .isDate()  // Check if it's a valid date
    .withMessage("birthdate debe ser una fecha válida")
    .toDate(),  // Convert the input to a JavaScript Date object
];
//////////////////////////////////////////
const updatePacienteValidator = [
  body("Dui")
  .isString()
  .withMessage("Dui debe ser un string")
  .trim()
  .isLength({ min: 4, max: 240 }),

  body("firstNames")
    .optional()
    .isString()
    .withMessage("1er nombre debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("lastNames")
    .optional()
    .isString()
    .withMessage("Los apellidos deben ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("phone")
  .optional()
  .isString()
  .withMessage('phone debe ser un string')
  .trim()
  .isLength({ max: 12 })
  .withMessage('phone no debe tener más de 12 caracteres'),

  body("sex")
    .optional()
    .isString()
    .withMessage("sex debe ser un string")
    .trim()
    .isLength({ min: 4, max: 6 }),

  body("civilStatus")
    .optional()
    .isString()
    .withMessage("civilStatus debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("civilStatus debe tener entre 4 y 240 caracteres"),

  body("occupation")
    .optional()
    .isString()
    .withMessage("occupation debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("occupation debe tener entre 4 y 240 caracteres"),

  body("homeAddress")
    .optional()
    .isString()
    .withMessage("homeAddress debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("homeAddress debe tener entre 4 y 240 caracteres"),

  body("weight")
    .optional()
    .isNumeric()
    .withMessage("weight debe ser un numero")
    .isInt({ min: 0, max: 999 })
    .withMessage("weight should be between 0 and 999"),

  body("height")
    .optional()
    .isNumeric()
    .withMessage("height debe ser un numero")
    .isInt({ min: 0, max: 999 })
    .withMessage("height should be between 0 and 999"),

  body("symptoms")
    .optional()
    .isString()
    .withMessage("symptoms debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("symptoms debe tener entre 4 y 240 caracteres"),

  body("allergies")
    .optional()
    .isString()
    .withMessage("allergies debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("allergies debe tener entre 4 y 240 caracteres"),

  body("preExistingConditions")
    .isString()
    .optional()
    .withMessage("preExistingConditions debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("preExistingConditions debe tener entre 4 y 240 caracteres"),

 
  body("birthdate")
    .isDate()  // Check if it's a valid date
    .withMessage("birthdate debe ser una fecha válida")
    .toDate(),  // Convert the input to a JavaScript Date object
];

//////////////////////////////////////////
const createDoctorValidator = [
  body("DUI")
  .isString()
  .withMessage("DUI debe ser un string")
  .trim()
  .isLength({ min: 4, max: 240 }),
  body("firstNames")
    .isString()
    .withMessage("1er nombre debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("lastNames")
    .isString()
    .withMessage("Los apellidos deben ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("especializacion")
    .isString()
    .withMessage("La especializacion debe ser un string")
    .trim()
    .isLength({ min: 10, max: 30 })
    .withMessage("La especializacion debe tener entre 10 y 30 caracteres"),

  body("phone")
  .optional()
  .isString()
  .withMessage('phone debe ser un string')
  .trim()
  .isLength({ max: 12 })
  .withMessage('phone no debe tener más de 12 caracteres'),

  body("email")
    .isEmail()
    .withMessage("Debe tener formato de email")
    .isLength({ min: 8, max: 64 })
    .withMessage("El email debe tener entre 8 y 12 caracteres"),
];
//////////////////////////////////////////
const updateDoctorValidator = [
  body("DUI")
  .isString()
  .withMessage("DUI debe ser un string")
  .trim()
  .isLength({ min: 4, max: 240 }),
  body("firstNames")
  .optional()
    .isString()
    .withMessage("1er nombre debe ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("lastNames")
    .optional()
    .isString()
    .withMessage("Los apellidos deben ser un string")
    .trim()
    .isLength({ min: 4, max: 240 })
    .withMessage("1er nombre debe tener entre 4 y 240 caracteres"),

  body("especializacion")
    .optional()
    .isString()
    .withMessage("La especializacion debe ser un string")
    .trim()
    .isLength({ min: 10, max: 30 })
    .withMessage("La especializacion debe tener entre 10 y 30 caracteres"),

  body("phone")
  .optional()
  .isString()
  .withMessage('phone debe ser un string')
  .trim()
  .isLength({ max: 12 })
  .withMessage('phone no debe tener más de 12 caracteres'),

  body("email")
    .optional()
    .isEmail()
    .withMessage("Debe tener formato de email")
    .isLength({ min: 8, max: 64 })
    .withMessage("El email debe tener entre 8 y 12 caracteres"),
    
    body("birthdate")
    .isDate()  // Check if it's a valid date
    .withMessage("birthdate debe ser una fecha válida")
    .toDate(),  // Convert the input to a JavaScript Date object
];

//////////////////////////////////////////
const createMedicalAppointmentValidator = [
  // Elimina esta validación si no estás usando 'id'
  body('id')
    .isNumeric()
    .withMessage('id debe ser un número')
    .trim()
    .isInt({ min: 0, max: 999 })
    .withMessage("stars should be between 0 and 5"),

  body('patientId')
    .isMongoId()
    .withMessage('patientId debe ser un ObjectId válido'),

  body('doctorId')
    .isMongoId()
    .withMessage('doctorId debe ser un ObjectId válido'),

    body('dateOfAppointment')
    .isString()
    .withMessage('dateOfAppointment debe ser un string')
    .trim()
    .custom(value => isISO8601(value))  
    .withMessage('dateOfAppointment debe ser un formato de fecha ISO 8601 válido'),
    
  body('symptoms')  
    .isString()
    .withMessage('symptoms debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('symptoms no debe tener más de 128 caracteres'),

  body('phone')
    .isString()
    .withMessage('phone debe ser un string')
    .trim()
    .isLength({ max: 12 })
    .withMessage('phone no debe tener más de 12 caracteres'),
    body('name')
    .isString()
    .withMessage('name debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('name no debe tener más de 64 caracteres'),
    
];

//////////////////////////////////////////
const updateMedicalAppointmentValidator = [
    body('id')
    .optional()
    .isNumeric()
    .withMessage('id debe ser un número')
    .trim()
    .isInt({ min: 0, max: 999 })
    .withMessage("stars should be between 0 and 5"),


  body('patientId')
    .optional()
    .isMongoId()
    .withMessage('patientId debe ser un ObjectId válido'),

  body('doctorId')
    .optional()
    .isMongoId()
    .withMessage('doctorId debe ser un ObjectId válido'),

    body('dateOfAppointment')
    .isString()
    .withMessage('dateOfAppointment debe ser un string')
    .trim()
    .custom(value => isISO8601(value))  // Check if it's a valid ISO 8601 date
    .withMessage('dateOfAppointment debe ser un formato de fecha ISO 8601 válido')
    .isLength({ max: 64 })
    .withMessage('dateOfAppointment no debe tener más de 64 caracteres'),

  body('symptoms')  
  .optional()
  .isString()
  .withMessage('symptoms debe ser un string')
  .trim()
  .isLength({ max: 128 })
  .withMessage('symptoms no debe tener más de 128 caracteres'),

  body('phone')
  .optional()
  .isString()
  .withMessage('phone debe ser un string')
  .trim()
  .isLength({ max: 12 })
  .withMessage('phone no debe tener más de 12 caracteres'),


];


//////////////////////////////////////////
const createMedicalRecordValidator = [
    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('patientId')
    .isMongoId()
    .withMessage('patientId debe ser un ObjectId válido'),

  body('symptoms')
    .isString()
    .withMessage('symptoms debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('symptoms no debe tener más de 128 caracteres'),

  body('diagnosis')
    .isString()
    .withMessage('diagnosis debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('diagnosis no debe tener más de 64 caracteres'),

  body('prescribedTreatment')
    .isString()
    .withMessage('prescribedTreatment debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('prescribedTreatment no debe tener más de 128 caracteres'),

  body('testResults')
    .isString()
    .withMessage('testResults debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('testResults no debe tener más de 128 caracteres'),

  body('additionalObservations')
    .isString()
    .withMessage('additionalObservations debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('additionalObservations no debe tener más de 128 caracteres'),
];
//////////////////////////////////////////
const updateMedicalRecordValidator = [
    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('patientId')
    .optional()
    .isMongoId()
    .withMessage('patientId debe ser un ObjectId válido'),

  body('symptoms')
    .optional()
    .isString()
    .withMessage('symptoms debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('symptoms no debe tener más de 128 caracteres'),

  body('diagnosis')
    .optional()
    .isString()
    .withMessage('diagnosis debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('diagnosis no debe tener más de 64 caracteres'),

  body('prescribedTreatment')
    .optional()
    .isString()
    .withMessage('prescribedTreatment debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('prescribedTreatment no debe tener más de 128 caracteres'),

  body('testResults')
    .optional()
    .isString()
    .withMessage('testResults debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('testResults no debe tener más de 128 caracteres'),

  body('additionalObservations')
    .optional()
    .isString()
    .withMessage('additionalObservations debe ser un string')
    .trim()
    .isLength({ max: 128 })
    .withMessage('additionalObservations no debe tener más de 128 caracteres'),
];

//////////////////////////////////////////
const createPrescriptionValidator = [
    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('patientId')
    .isMongoId()
    .withMessage('patientId debe ser un ObjectId válido'),

  body('prescribedMedications')
    .isString()
    .withMessage('prescribedMedications debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('prescribedMedications no debe tener más de 64 caracteres'),

  body('dose')
    .isString()
    .withMessage('dose debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('dose no debe tener más de 64 caracteres'),

  body('frequency')
    .isString()
    .withMessage('frequency debe ser un string')
    .trim()
    .isLength({ max: 32 })
    .withMessage('frequency no debe tener más de 32 caracteres'),
];

//////////////////////////////////////////
const updatePrescriptionValidator = [

    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('patientId')
    .isMongoId()
    .withMessage('patientId debe ser un ObjectId válido'),

  body('prescribedMedications')
    .optional()
    .isString()
    .withMessage('prescribedMedications debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('prescribedMedications no debe tener más de 64 caracteres'),

  body('dose')
    .optional()
    .isString()
    .withMessage('dose debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('dose no debe tener más de 64 caracteres'),

  body('frequency')
    .optional()
    .isString()
    .withMessage('frequency debe ser un string')
    .trim()
    .isLength({ max: 32 })
    .withMessage('frequency no debe tener más de 32 caracteres'),
];
//////////////////////////////////////////
const createUserValidator = [
    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('username')
    .isString()
    .withMessage('username debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('username no debe tener más de 64 caracteres'),

  body('password')
    .isString()
    .withMessage('password debe ser un string')
    .trim()
    .isLength({ max: 255 })
    .withMessage('password no debe tener más de 255 caracteres'),

  body('role')
    .isString()
    .withMessage('role debe ser un string')
    .trim()
    .isIn(['Patient', 'Doctor', 'Admin'])
    .withMessage('role debe ser uno de los siguientes: Patient, Doctor, Admin'),
];

//////////////////////////////////////////
const updateUserValidator = [
    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('username')
    .optional()
    .isString()
    .withMessage('username debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('username no debe tener más de 64 caracteres'),

  body('password')
    .optional()
    .isString()
    .withMessage('password debe ser un string')
    .trim()
    .isLength({ max: 255 })
    .withMessage('password no debe tener más de 255 caracteres'),

  body('role')
    .optional()
    .isString()
    .withMessage('role debe ser un string')
    .trim()
    .isIn(['Patient', 'Doctor', 'Admin'])
    .withMessage('role debe ser uno de los siguientes: Patient, Doctor, Admin'),
];

//////////////////////////////////////////
const createAdminValidator = [
    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('firstNames')
    .isString()
    .withMessage('firstNames debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('firstNames no debe tener más de 64 caracteres'),

  body('lastNames')
    .isString()
    .withMessage('lastNames debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('lastNames no debe tener más de 64 caracteres'),

  body('phone')
  .optional()
  .isString()
  .withMessage('phone debe ser un string')
  .trim()
  .isLength({ max: 12 })
  .withMessage('phone no debe tener más de 12 caracteres'),

  body('email')
    .isEmail()
    .withMessage('email debe ser un correo electrónico válido')
    .trim()
    .isLength({ max: 64 })
    .withMessage('email no debe tener más de 64 caracteres'),

  body('password')
    .isString()
    .withMessage('password debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('password no debe tener más de 64 caracteres'),
];

//////////////////////////////////////////
const updateAdminValidator = [
    body('id')
    .isNumeric()
    .withMessage('id debe ser un número'),

  body('firstNames')
    .optional()
    .isString()
    .withMessage('firstNames debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('firstNames no debe tener más de 64 caracteres'),

  body('lastNames')
    .optional()
    .isString()
    .withMessage('lastNames debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('lastNames no debe tener más de 64 caracteres'),

  body('phone')
  .optional()
  .isString()
  .withMessage('phone debe ser un string')
  .trim()
  .isLength({ max: 12 })
  .withMessage('phone no debe tener más de 12 caracteres'),

  body('email')
    .optional()
    .isEmail()
    .withMessage('email debe ser un correo electrónico válido')
    .trim()
    .isLength({ max: 64 })
    .withMessage('email no debe tener más de 64 caracteres'),

  body('password')
    .optional()
    .isString()
    .withMessage('password debe ser un string')
    .trim()
    .isLength({ max: 64 })
    .withMessage('password no debe tener más de 64 caracteres'),
];



const idInParams = [
  param("id")
    .notEmpty()
    .withMessage("id field is required")
    .isMongoId()
    .withMessage("id must be mongo id"),
];

module.exports ={
    createPacienteValidator,
    updatePacienteValidator,
    createDoctorValidator,
    updateDoctorValidator,
    createMedicalAppointmentValidator,
    updateMedicalAppointmentValidator,
    createMedicalRecordValidator,
    updateMedicalRecordValidator,
    createPrescriptionValidator,
    updatePrescriptionValidator,
    createUserValidator,
    updateUserValidator,
    createAdminValidator,
    updateAdminValidator,
    idInParams,
}