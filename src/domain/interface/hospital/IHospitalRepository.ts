import { IHospital } from "./IHospital";

export interface IHospitalRepository {
  listAll(): Promise<IHospital[]>;
  create(hospital: IHospital): Promise<IHospital>;
}
