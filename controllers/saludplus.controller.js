const httpError = require("http-errors");
const {
  Patient,
  Doctor,
  MedicalAppointment,
  MedicalRecord,
  Prescription,
  User,
  Admin,
} = require("../models/saludplus.model");

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//PACIENTE
const createPatient = async (req, res, next) => {
  try {
    const { body } = req;
    const newPatient = new Patient(body);
    const savedPatient = await newPatient.save();
    console.log("paciente guardao", savedPatient);
    if (!savedPatient) throw httpError(500, "PACIENTE NO CREADO URGENTE");
    res.status(201).json({ message: "patient created", data: savedPatient });
  } catch (error) {
    console.log("error", error);
    next(error);
  }
};
const getPatients = async (req, res, next) => {
  try {
    const { name } = req.query;
    let query = {};

    if (name) {
      // If a name is provided, use it in the query
      query = { firstNames: { $regex: new RegExp(name, "i") } };
    }

    const patients = await Patient.find(query);
    res.status(200).json({ message: "patients found", data: patients });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

const getOnePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const patient = await Patient.findById(id);
    if (!patient) throw httpError(404, "PACIENTE NO ENCONTRADO URGENTE");
    res.status(200).json({ message: "patient found", data: patient });
  } catch (error) {
    next(error);
  }
};

// Modifica el controlador para usar el ID en lugar de name
const updatePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedPatient = await Patient.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });

    if (!updatedPatient) {
      throw httpError(404, "Paciente no encontrado");
    }

    res
      .status(200)
      .json({ message: "Paciente actualizado", data: updatedPatient });
  } catch (error) {
    next(error);
  }
};

const deletePatient = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPatient = await Patient.findByIdAndDelete(id);
    if (!deletedPatient) throw httpError(404, "PACIENTE NO ENCONTRADO URGENTE");
    if (!deletedPatient) {
      throw httpError(500, "PACIENTE NO BORRADO URGENTE");
    }

    res.status(200).json({ message: "patient deleted", data: deletedPatient });
  } catch (error) {
    next(error);
  }
};

//DOCTORES
const createDoctor = async (req, res, next) => {
  try {
    const { body } = req;
    const newDoctor = new Doctor(body);
    const savedDoctor = await newDoctor.save();
    if (!savedDoctor) throw httpError(500, "DOCTOR NO ENCONTRADO");
    res.status(201).json({ message: "Doctor Creado", data: savedDoctor });
  } catch (error) {
    next(error);
  }
};

const getDoctors = async (req, res, next) => {
  try {
    const doctors = await Doctor.find();
    if (!doctors) throw httpError(404, "Doctor no encontrado");
    res.status(200).json({ message: "Doctor encontrado", data: doctors });
  } catch (error) {
    next(error);
  }
};

const getOneDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const doctor = await Doctor.findById(id);
    if (!doctor) throw httpError(404, "Doctor no lo hemos encontrador");
    res.status(200).json({ message: "doctor not found", data: doctor });
  } catch (error) {
    next(error);
  }
};

const updateDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const toUpdateDoctor = await Doctor.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!toUpdateDoctor) throw httpError(404, "Doctor no encontrador");
    res
      .status(200)
      .json({ message: "doctor actualizaado", data: toUpdateDoctor });
  } catch (error) {
    next(error);
  }
};
const deleteDoctor = async (req, res, next) => {
  try {
    const { id } = req.params;
    const toDeleteDoctor = await Doctor.findById(id);
    if (!toDeleteDoctor) throw httpError(404, "Doctor no encontrador");
    const deletedDoctor = await Doctor.findByIdAndDelete(id);
    if (!deletedDoctor) throw httpError(500, "DOCTOR NO BORRADO");
    res
      .status(200)
      .json({ message: "doctor no encontrado", data: deletedDoctor });
  } catch (error) {
    next(error);
  }
};

////////////////////////////////////////////////
const createMedicalAppointment = async (req, res, next) => {
  try {
    const { body } = req;

    // Crear una instancia de MedicalAppointment
    const newMedicalAppointment = new MedicalAppointment(body);

    // Guardar la cita médica en la base de datos
    const savedMedicalAppointment = await newMedicalAppointment.save();

    // Poblar las referencias para obtener la información completa
    const populatedMedicalAppointment = await MedicalAppointment.findById(savedMedicalAppointment._id)
      .populate('patientId')
      .populate('doctorId');

    // Verificar si la cita médica se guardó correctamente
    if (!populatedMedicalAppointment) {
      // En caso de error, lanzar un error HTTP 500 con un mensaje específico
      throw httpError(500, "No se pudo crear la cita médica.");
    }

    // Enviar una respuesta 201 (Created) con la información de la cita médica creada
    res.status(201).json({
      message: "Cita médica creada exitosamente.",
      data: populatedMedicalAppointment,
    });
  } catch (error) {
    // Manejar errores y pasarlos al siguiente middleware de manejo de errores
    throw httpError(500, `No se pudo crear la cita médica. Error: ${error.message}`);
  }
};


const getMedicalAppointments = async (req, res, next) => {
  try {
    const medicalAppointments = await MedicalAppointment.find();
    if (!medicalAppointments)
      throw httpError(404, "CITAS MÉDICAS NO ENCONTRADAS URGENTE");
    res
      .status(200)
      .json({
        message: "medical appointments found",
        data: medicalAppointments,
      });
  } catch (error) {
    next(error);
  }
};

const getOneMedicalAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medicalAppointment = await MedicalAppointment.findById(id);
    if (!medicalAppointment)
      throw httpError(404, "CITA MÉDICA NO ENCONTRADA URGENTE");
    res
      .status(200)
      .json({ message: "medical appointment found", data: medicalAppointment });
  } catch (error) {
    next(error);
  }
};

const updateMedicalAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedMedicalAppointment =
      await MedicalAppointment.findByIdAndUpdate(id, body, { new: true });
    if (!updatedMedicalAppointment)
      throw httpError(404, "CITA MÉDICA NO ENCONTRADA URGENTE");
    res
      .status(200)
      .json({
        message: "medical appointment updated",
        data: updatedMedicalAppointment,
      });
  } catch (error) {
    next(error);
  }
};

const deleteMedicalAppointment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMedicalAppointment =
      await MedicalAppointment.findByIdAndDelete(id);
    if (!deletedMedicalAppointment)
      throw httpError(500, "CITA MÉDICA NO BORRADA URGENTE");
    res
      .status(200)
      .json({
        message: "medical appointment deleted",
        data: deletedMedicalAppointment,
      });
  } catch (error) {
    next(error);
  }
};
/////////////////////////////////

const createMedicalRecord = async (req, res, next) => {
  try {
    const { body } = req;
    const newMedicalRecord = new MedicalRecord(body);
    const savedMedicalRecord = await newMedicalRecord.save();
    if (!savedMedicalRecord)
      throw httpError(500, "REGISTRO MÉDICO NO CREADO URGENTE");
    res
      .status(201)
      .json({ message: "medical record created", data: savedMedicalRecord });
  } catch (error) {
    next(error);
  }
};

const getMedicalRecords = async (req, res, next) => {
  try {
    const medicalRecords = await MedicalRecord.find();
    if (!medicalRecords)
      throw httpError(404, "REGISTROS MÉDICOS NO ENCONTRADOS URGENTE");
    res
      .status(200)
      .json({ message: "medical records found", data: medicalRecords });
  } catch (error) {
    next(error);
  }
};

const getOneMedicalRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const medicalRecord = await MedicalRecord.findById(id);
    if (!medicalRecord)
      throw httpError(404, "REGISTRO MÉDICO NO ENCONTRADO URGENTE");
    res
      .status(200)
      .json({ message: "medical record found", data: medicalRecord });
  } catch (error) {
    next(error);
  }
};

const updateMedicalRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedMedicalRecord = await MedicalRecord.findByIdAndUpdate(
      id,
      body,
      { new: true }
    );
    if (!updatedMedicalRecord)
      throw httpError(404, "REGISTRO MÉDICO NO ENCONTRADO URGENTE");
    res
      .status(200)
      .json({ message: "medical record updated", data: updatedMedicalRecord });
  } catch (error) {
    next(error);
  }
};

const deleteMedicalRecord = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedMedicalRecord = await MedicalRecord.findByIdAndDelete(id);
    if (!deletedMedicalRecord)
      throw httpError(500, "REGISTRO MÉDICO NO BORRADO URGENTE");
    res
      .status(200)
      .json({ message: "medical record deleted", data: deletedMedicalRecord });
  } catch (error) {
    next(error);
  }
};
//////////////////////////////////////////

const createPrescription = async (req, res, next) => {
  try {
    const { body } = req;
    const newPrescription = new Prescription(body);
    const savedPrescription = await newPrescription.save();
    if (!savedPrescription) throw httpError(500, "RECETA NO CREADA URGENTE");
    res
      .status(201)
      .json({ message: "prescription created", data: savedPrescription });
  } catch (error) {
    next(error);
  }
};

const getPrescriptions = async (req, res, next) => {
  try {
    const prescriptions = await Prescription.find();
    if (!prescriptions) throw httpError(404, "RECETAS NO ENCONTRADAS URGENTE");
    res
      .status(200)
      .json({ message: "prescriptions found", data: prescriptions });
  } catch (error) {
    next(error);
  }
};

const getOnePrescription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const prescription = await Prescription.findById(id);
    if (!prescription) throw httpError(404, "RECETA NO ENCONTRADA URGENTE");
    res.status(200).json({ message: "prescription found", data: prescription });
  } catch (error) {
    next(error);
  }
};

const updatePrescription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedPrescription = await Prescription.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!updatedPrescription)
      throw httpError(404, "RECETA NO ENCONTRADA URGENTE");
    res
      .status(200)
      .json({ message: "prescription updated", data: updatedPrescription });
  } catch (error) {
    next(error);
  }
};

const deletePrescription = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedPrescription = await Prescription.findByIdAndDelete(id);
    if (!deletedPrescription) throw httpError(500, "RECETA NO BORRADA URGENTE");
    res
      .status(200)
      .json({ message: "prescription deleted", data: deletedPrescription });
  } catch (error) {
    next(error);
  }
};
///////////////////////////////////////////
const createUser = async (req, res, next) => {
  try {
    const { body } = req;
    const newUser = new User(body);
    const savedUser = await newUser.save();
    if (!savedUser) throw httpError(500, "USUARIO NO CREADO URGENTE");
    res.status(201).json({ message: "user created", data: savedUser });
  } catch (error) {
    next(error);
  }
};

const getUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    if (!users) throw httpError(404, "USUARIOS NO ENCONTRADOS URGENTE");
    res.status(200).json({ message: "users found", data: users });
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id);
    if (!user) throw httpError(404, "USUARIO NO ENCONTRADO URGENTE");
    res.status(200).json({ message: "user found", data: user });
  } catch (error) {
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedUser = await User.findByIdAndUpdate(id, body, { new: true });
    if (!updatedUser) throw httpError(404, "USUARIO NO ENCONTRADO URGENTE");
    res.status(200).json({ message: "user updated", data: updatedUser });
  } catch (error) {
    next(error);
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) throw httpError(500, "USUARIO NO BORRADO URGENTE");
    res.status(200).json({ message: "user deleted", data: deletedUser });
  } catch (error) {
    next(error);
  }
};
////////////////////////////////////////////
const createAdmin = async (req, res, next) => {
  try {
    const { body } = req;
    const newAdmin = new Admin(body);
    const savedAdmin = await newAdmin.save();
    if (!savedAdmin) throw httpError(500, "ADMINISTRADOR NO CREADO URGENTE");
    res.status(201).json({ message: "admin created", data: savedAdmin });
  } catch (error) {
    next(error);
  }
};

const getAdmins = async (req, res, next) => {
  try {
    const admins = await Admin.find();
    if (!admins) throw httpError(404, "ADMINISTRADORES NO ENCONTRADOS URGENTE");
    res.status(200).json({ message: "admins found", data: admins });
  } catch (error) {
    next(error);
  }
};

const getOneAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const admin = await Admin.findById(id);
    if (!admin) throw httpError(404, "ADMINISTRADOR NO ENCONTRADO URGENTE");
    res.status(200).json({ message: "admin found", data: admin });
  } catch (error) {
    next(error);
  }
};

const updateAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updatedAdmin = await Admin.findByIdAndUpdate(id, body, { new: true });
    if (!updatedAdmin)
      throw httpError(404, "ADMINISTRADOR NO ENCONTRADO URGENTE");
    res.status(200).json({ message: "admin updated", data: updatedAdmin });
  } catch (error) {
    next(error);
  }
};

const deleteAdmin = async (req, res, next) => {
  try {
    const { id } = req.params;
    const deletedAdmin = await Admin.findByIdAndDelete(id);
    if (!deletedAdmin) throw httpError(500, "ADMINISTRADOR NO BORRADO URGENTE");
    res.status(200).json({ message: "admin deleted", data: deletedAdmin });
  } catch (error) {
    next(error);
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Encuentra al usuario por su correo electrónico
    const user = await User.findOne({ username });

    // Verifica la contraseña
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: "Credenciales inválidas" });
    }

    // Genera un token de sesión
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token });
  } catch (error) {
    console.error("Error en el inicio de sesión:", error);
    res.status(500).json({ error });
  }
};

module.exports = {
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
  login,
};
