// En saludplus.router.js
const express = require("express");
const router = express.Router();
const {
  createPatient,
  getPatients,
  getOnePatient,
  updatePatient,
  deletePatient,
  createDoctor,
  getDoctors,
  getOneDoctor,
  updateDoctor,
  deleteDoctor,
  createMedicalAppointment,
  getMedicalAppointments,
  getOneMedicalAppointment,
  updateMedicalAppointment,
  deleteMedicalAppointment,
  createMedicalRecord,
  getMedicalRecords,
  getOneMedicalRecord,
  updateMedicalRecord,
  deleteMedicalRecord,
  createPrescription,
  getPrescriptions,
  getOnePrescription,
  updatePrescription,
  deletePrescription,
  createUser,
  getUsers,
  getOneUser,
  updateUser,
  deleteUser,
  createAdmin,
  getAdmins,
  getOneAdmin,
  updateAdmin,
  deleteAdmin,
  login
} = require("../controllers/saludplus.controller");

const {
  idInParams,
  createMovieValidator,
  updateMovieValidator,
} = require("../validators/saludplus.validators");

const runValidation = require("../middlewares/validator.middleware");

router.post("/patients", runValidation, createPatient);
router.get("/getpatients", runValidation, getPatients);
router.get("/patients/:id", runValidation, getOnePatient);
router.patch("/updatepatients/:id", runValidation, updatePatient);
router.delete("/deletepatients/:id", runValidation, deletePatient);

router.post("/doctors", runValidation, createDoctor);
router.get("/getdoctors", runValidation, getDoctors);
router.get("/doctors/:id", runValidation, getOneDoctor);
router.patch("/doctors/:id", runValidation, updateDoctor);
router.delete("/deletedoctors/:id", runValidation, deleteDoctor);

router.post("/medicalAppointments", runValidation, createMedicalAppointment);
router.get("/getmedicalAppointments", runValidation, getMedicalAppointments);
router.get("/medicalAppointments/:id", runValidation, getOneMedicalAppointment);
router.patch("/updatemedicalAppointments/:id", runValidation, updateMedicalAppointment);
router.delete("/deletemedicalAppointments/:id", runValidation, deleteMedicalAppointment);

router.post("/medicalRecords", runValidation, createMedicalRecord);
router.get("/getmedicalRecords", runValidation, getMedicalRecords);
router.get("/medicalRecords/:id", runValidation, getOneMedicalRecord);
router.patch("/updatemedicalRecords/:id", runValidation, updateMedicalRecord);
router.delete("/deletemedicalRecords/:id", runValidation, deleteMedicalRecord);

router.post("/prescriptions", runValidation, createPrescription);
router.get("/getprescriptions", runValidation, getPrescriptions);
router.get("/prescriptions/:id", runValidation, getOnePrescription);
router.patch("/updateprescriptions/:id", runValidation, updatePrescription);
router.delete("/deleteprescriptions/:id", runValidation, deletePrescription);

router.post("/users", runValidation, createUser);
router.get("/getusers", runValidation, getUsers);
router.get("/users/:id", runValidation, getOneUser);
router.patch("/updateusers/:id", runValidation, updateUser);
router.delete("/deleteusers/:id", runValidation, deleteUser);

router.post("/admins", runValidation, createAdmin);
router.get("/getadmins", runValidation, getAdmins);
router.get("/admins/:id", runValidation, getOneAdmin);
router.patch("/updateadmins/:id", runValidation, updateAdmin);
router.delete("/deleteadmins/:id", runValidation, deleteAdmin);

router.post("/login", runValidation, login);

module.exports = router;
