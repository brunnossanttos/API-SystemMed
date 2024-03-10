import { IPatientRepository } from 'src/domain/interface/patient/IPatientRepository';

export class ListPatientsUseCase {
  private patientRepository: IPatientRepository;

  constructor(patientsRepository: IPatientRepository) {
    this.patientRepository = patientsRepository;
  }

  async execute() {
    const patients = await this.patientRepository.listAll();

    return patients;
  }
}
