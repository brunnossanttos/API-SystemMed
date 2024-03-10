import { IPatientRepository } from 'src/domain/interface/patient/IPatientRepository';
import { PatientModel } from '../model/patientModel';
import { IPatient } from 'src/domain/interface/patient/IPatient';

export class PatientRepository implements IPatientRepository {
  async findById(id: string): Promise<IPatient | undefined> {
    const patient = await PatientModel.findById(id);

    return patient;
  }

  async listAll(): Promise<IPatient[]> {
    const patients = await PatientModel.find();

    return patients;
  }

  async create(paciente: IPatient): Promise<IPatient> {
    const newPatient = new PatientModel(paciente);

    newPatient.save();

    return newPatient;
  }

  async delete(id: string): Promise<void> {
    await PatientModel.findByIdAndDelete(id);
  }
}
