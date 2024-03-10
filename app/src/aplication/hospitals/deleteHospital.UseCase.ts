import { IHospitalRepository } from 'src/domain/interface/hospital/IHospitalRepository';

export class DeleteHospitalUseCase {
  private hospitalRepository: IHospitalRepository;

  constructor(hospitalsRepository: IHospitalRepository) {
    this.hospitalRepository = hospitalsRepository;
  }

  async execute(hospitalId: string) {
    const hospital = await this.hospitalRepository.findById(hospitalId);

    if (!hospital) {
      throw new Error('Hospital not found');
    }

    await this.hospitalRepository.delete(hospitalId);
  }
}
