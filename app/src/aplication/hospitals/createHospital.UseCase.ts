import { HashString } from '@shared/Hash';
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
    const hashPassword = new HashString();
    const hashedPassword = await hashPassword.generateHash(password);

    const newHospital: IHospital = {
      name,
      email,
      password: hashedPassword,
      cnpj,
      city: city ?? undefined,
    };

    const registeredPatient = await this.hospitalRepository.create(newHospital);

    return { hospital: registeredPatient, createSystem };
  }
}
