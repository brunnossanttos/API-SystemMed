import { IPatient } from "./IPatient";

export interface IPacientRepository {
  listAll(): Promise<IPatient[]>;
  create(paciente: IPatient): Promise<IPatient>;
}
