import { IHospital } from "../../domain/interface/hospital/IHospital";
import { IHospitalRepository } from "../../domain/interface/hospital/IHospitalRepository";

export class HospitalsRepositoryInMemory implements IHospitalRepository {
  private hospitals: IHospital[];

  constructor() {
    const hospital_1: IHospital = {
      name: "Hospital São Jõao",
      cnpj: "12312312312312",
    };

    const hospital_2: IHospital = {
      name: "Hospital São Luiz",
      cnpj: "12312312312313",
      city: "Unai",
    };

    this.hospitals = [hospital_1, hospital_2];
  }

  listAll = async (): Promise<IHospital[]> => {
    return this.hospitals;
  };

  create = async (paciente: IHospital): Promise<IHospital> => {
    this.hospitals.push(paciente);

    return paciente;
  };
}
