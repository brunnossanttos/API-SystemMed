import { IPacientRepository } from "src/domain/interface/patient/IPatientRepository";

export class ListPatientsUseCase {
  private patientRepository: IPacientRepository;

  constructor(patientsRepository: IPacientRepository) {
    this.patientRepository = patientsRepository;
  }

  async execute() {
    const patients = await this.patientRepository.listAll();

    return patients;
  }
}
