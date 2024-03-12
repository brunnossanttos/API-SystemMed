import mongoose, { Document, Schema } from 'mongoose';
import { IHospital } from 'src/domain/interface/hospital/IHospital';
import { IRoles } from 'src/domain/interface/shared/IRoles';

const hospitalSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  cnpj: { type: String, required: true },
  password: { type: String, required: true },
  city: String,
  role: { type: String, enum: Object.values(IRoles), default: IRoles.HOSPITAL },
});

interface IHospitalDocument extends IHospital, Document {}

export const HospitalModel = mongoose.model<IHospitalDocument>(
  'Hospital',
  hospitalSchema,
);
