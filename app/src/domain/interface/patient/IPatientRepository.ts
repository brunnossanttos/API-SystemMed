import { IPatient } from './IPatient';

export interface IPatientRepository {
  findById(id: string): Promise<IPatient | undefined>;
  listAll(): Promise<IPatient[]>;
  create(paciente: IPatient): Promise<IPatient>;
  delete(id: string): Promise<void>;
}
