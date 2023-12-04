const { Schema, model } = require("mongoose");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt"); 
///////////////////////////////////////////////////////
const PatientSchema = new Schema({
  Dui: {
    type: String,
    required: true,
    unique: true,
    
  },
  firstNames: {
    type: String,
    required: true,
    maxlength: 64,
  },
  lastNames: {
    type: String,
    required: true,
    maxlength: 64,
  },
  phone: {
    type: String,
    maxlength: 12,
  },
  sex: {
    type: String,
    required: true,
    maxlength: 10,
  },
  civilStatus: {
    type: String,
    maxlength: 20,
  },
  occupation: {
    type: String,
    required: true,
    maxlength: 50,
  },
  homeAddress: {
    type: String,
    maxlength: 128,
  },
  weight: {
    type: Number,
    required: true,
  },
  height: {
    type: Number,
    required: true,
  },
  symptoms: {
    type: String,
    maxlength: 255,
  },
  allergies: {
    type: String,
    maxlength: 64,
  },
  preExistingConditions: {
    type: String,
    maxlength: 255,
  },
  birthdate: {
    type: Date,
    required: true,
  },
});

/////////////////////////////////////DOCTOR SCHEMA
const DoctorSchema = new Schema({
  Dui: {
    type: String,
    required: true,
    unique: true,
  },
  firstNames: {
    type: String,
    required: true,
    maxlength: 64,
  },
  lastNames: {
    type: String,
    required: true,
    maxlength: 64,
  },
  specialization: {
    type: String,
    required: true,
    maxlength: 64,
  },
  phone: {
    type: String,
    maxlength: 12,
  },
  email: {
    type: String,
    unique: true,
    maxlength: 64,
  },
  consultationHours: {
    type: String,
    required: true,
    maxlength: 64,
  },
});
//////////////////////////////////
const MedicalAppointmentSchema = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
  },
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: "Doctor",
  },
  dateOfAppointment: {
    type: Date,
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
    maxlength: 128,
  },
  phone: {
    type: String,
    maxlength: 12,
  },
  name: {
    type: String,
    maxlength: 64,
  },
});
/////////////////////////////////////
const MedicalRecordSchema = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  symptoms: {
    type: String,
    required: true,
    maxlength: 128,
  },
  diagnosis: {
    type: String,
    required: true,
    maxlength: 64,
  },
  prescribedTreatment: {
    type: String,
    required: true,
    maxlength: 128,
  },
  testResults: {
    type: String,
    required: true,
    maxlength: 128,
  },
  additionalObservations: {
    type: String,
    required: true,
    maxlength: 128,
  },
});
////////////////////////////////////
const PrescriptionSchema = new Schema({
  patientId: {
    type: Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  prescribedMedications: {
    type: String,
    required: true,
    maxlength: 64,
  },
  dose: {
    type: String,
    required: true,
    maxlength: 64,
  },
  frequency: {
    type: String,
    required: true,
    maxlength: 32,
  },
});
//////////////////////////////////////
const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    maxlength: 64,
  },
  email:{
    type: String,
    required: true,
    unique: true,
    maxlength: 64,
  },
  password: {
    type: String,
    required: true,
    maxlength: 255,
  },
},{timestamps: true});
//CREANDO CONTRASEÑA segura para el usuario
UserSchema.pre("save", function (next) {
  const user = this;

  if (!user.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) return next(err);

      user.password = hash;
      next();
    });
  });
});

//////////////////////////////////////
const AdminSchema = new Schema({
  firstNames: {
    type: String,
    required: true,
    maxlength: 64,
  },
  lastNames: {
    type: String,
    required: true,
    maxlength: 64,
  },
  phone: {
    type: String,
    maxlength: 12,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    maxlength: 64,
  },
  password: {
    type: String,
    required: true,
    maxlength: 64,
  },
});

//creando contraseña segura para el admin
AdminSchema.pre("save", function (next) {
  const admin = this;

  if (!admin.isModified("password")) return next();

  bcrypt.genSalt(10, function (err, salt) {
    if (err) return next(err);

    bcrypt.hash(admin.password, salt, function (err, hash) {
      if (err) return next(err);

      admin.password = hash;
      next();
    });
  });
});

module.exports = {
  Doctor: mongoose.model("Doctor", DoctorSchema),
  Patient: mongoose.model("Patient", PatientSchema),
  MedicalAppointment: mongoose.model(
    "MedicalAppointment",
    MedicalAppointmentSchema
  ),
  MedicalRecord: mongoose.model("MedicalRecord", MedicalRecordSchema),
  Prescription: mongoose.model("Prescription", PrescriptionSchema),
  User: mongoose.model("User", UserSchema),
  AdminSchema: mongoose.model("Admin", AdminSchema),
};