import { IPatient } from "src/domain/interface/patient/IPatient";
import { IPacientRepository } from "src/domain/interface/patient/IPatientRepository";

export class PatientsRepositoryInMemory implements IPacientRepository {
  private patients: IPatient[];

  constructor() {
    const patient_1: IPatient = {
      name: "Jõao",
      age: 30,
    };

    const patient_2: IPatient = {
      name: "Luiz",
      age: 40,
      city: "Florianópolis",
    };

    this.patients = [patient_1, patient_2];
  }

  listAll = async (): Promise<IPatient[]> => {
    return this.patients;
  };

  create = async (patient: IPatient): Promise<IPatient> => {
    this.patients.push(patient);

    return patient;
  };
}
