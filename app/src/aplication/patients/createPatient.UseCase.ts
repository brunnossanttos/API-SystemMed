import { IPatient } from 'src/domain/interface/patient/IPatient';
import { IPacientRepository } from 'src/domain/interface/patient/IPatientRepository';

interface IResponseCreatepatient {
  patient: IPatient;
  createSystem: string;
}

export class CreatePatientUseCase {
  constructor(private patientRepository: IPacientRepository) {
    this.patientRepository = patientRepository;
  }

  async execute(
    { name, email, password, age, city }: IPatient,
    createSystem: string,
  ): Promise<IResponseCreatepatient> {
    const newPatient: IPatient = {
      name,
      email,
      password,
      age,
      city: city ?? undefined,
    };

    const registeredPatient = await this.patientRepository.create(newPatient);

    return { patient: registeredPatient, createSystem };
  }
}
