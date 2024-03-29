import mongoose, { Document, Schema } from 'mongoose';
import { IPatient } from 'src/domain/interface/patient/IPatient';

const patientSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age: { type: Number, required: true },
  password: { type: String, required: true },
  city: String,
});

interface IPatientDocument extends IPatient, Document {}

export const PatientModel = mongoose.model<IPatientDocument>(
  'Patient',
  patientSchema,
);
