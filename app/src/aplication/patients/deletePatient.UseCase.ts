import { IPatientRepository } from 'src/domain/interface/patient/IPatientRepository';

export class DeletePatientUseCase {
  constructor(private patientRepository: IPatientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(id: string): Promise<void> {
    const patient = await this.patientRepository.findById(id);

    if (!patient) {
      throw new Error('Patient not found');
    }

    await this.patientRepository.delete(id);
  }
}
