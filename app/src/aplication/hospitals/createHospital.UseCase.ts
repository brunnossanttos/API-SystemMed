import { IHospital } from 'src/domain/interface/hospital/IHospital';
import { IHospitalRepository } from 'src/domain/interface/hospital/IHospitalRepository';

interface IResponseCreateHospital {
  hospital: IHospital;
  createSystem: string;
}

export class CreateHospitalUseCase {
  constructor(private hospitalRepository: IHospitalRepository) {
    this.hospitalRepository = hospitalRepository;
  }

  async execute(
    { name, email, password, cnpj, city }: IHospital,
    createSystem: string,
  ): Promise<IResponseCreateHospital> {
    const newHospital: IHospital = {
      name,
      email,
      password,
      cnpj,
      city: city ?? undefined,
    };

    const registeredPatient = await this.hospitalRepository.create(newHospital);

    return { hospital: registeredPatient, createSystem };
  }
}
