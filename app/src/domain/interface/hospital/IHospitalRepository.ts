import { IHospital } from './IHospital';

export interface IHospitalRepository {
  findById(id: string): Promise<IHospital | undefined>;
  listAll(): Promise<IHospital[]>;
  create(hospital: IHospital): Promise<IHospital>;
  delete(id: string): Promise<void>;
}
