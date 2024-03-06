import { IPacientRepository } from 'src/domain/interface/patient/IPatientRepository';
import { PatientModel } from '../model/patientModel';
import { IPatient } from 'src/domain/interface/patient/IPatient';

export class PatientRepository implements IPacientRepository {
  async listAll(): Promise<IPatient[]> {
    const patients = await PatientModel.find();

    return patients;
  }

  async create(paciente: IPatient): Promise<IPatient> {
    const newPatient = new PatientModel(paciente);

    newPatient.save();

    return newPatient;
  }
}
