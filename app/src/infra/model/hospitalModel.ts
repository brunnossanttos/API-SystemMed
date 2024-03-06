import mongoose, { Document, Schema } from 'mongoose';
import { IHospital } from 'src/domain/interface/hospital/IHospital';

const hospitalSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cnpj: { type: String, required: true },
  password: { type: String, required: true },
  city: String,
});

interface IHospitalDocument extends IHospital, Document {}

export const HospitalModel = mongoose.model<IHospitalDocument>(
  'Hospital',
  hospitalSchema,
);
