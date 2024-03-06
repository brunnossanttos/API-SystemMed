import { IHospitalRepository } from "src/domain/interface/hospital/IHospitalRepository";

export class ListHospitalsUseCase {
  private hospitalRepository: IHospitalRepository;

  constructor(hospitalsRepository: IHospitalRepository) {
    this.hospitalRepository = hospitalsRepository;
  }

  async execute() {
    const hospitals = await this.hospitalRepository.listAll();

    return hospitals;
  }
}
