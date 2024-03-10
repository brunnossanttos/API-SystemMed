import { IPatientRepository } from 'src/domain/interface/patient/IPatientRepository';

export class ShowPatientUseCase {
  private patientRepository: IPatientRepository;

  constructor(patientsRepository: IPatientRepository) {
    this.patientRepository = patientsRepository;
  }

  async execute(patientId: string) {
    const patient = await this.patientRepository.findById(patientId);

    if (!patient) {
      throw new Error('Patient not found');
    }

    return patient;
  }
}
