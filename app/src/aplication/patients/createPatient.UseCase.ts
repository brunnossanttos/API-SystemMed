import { HashString } from '@shared/Hash';
import { IPatient } from 'src/domain/interface/patient/IPatient';
import { IPatientRepository } from 'src/domain/interface/patient/IPatientRepository';

interface IResponseCreatepatient {
  patient: IPatient;
  createSystem: string;
}

export class CreatePatientUseCase {
  constructor(
    private patientRepository: IPatientRepository,
    //private hashPassword: IHash,
  ) {
    this.patientRepository = patientRepository;
    //this.hashPassword = hashPassword;
  }

  async execute(
    { name, email, password, age, city }: IPatient,
    createSystem: string,
  ): Promise<IResponseCreatepatient> {
    const hashPassword = new HashString();
    const hashedPassword = await hashPassword.generateHash(password);
    const newPatient: IPatient = {
      name,
      email,
      password: hashedPassword,
      age,
      city: city ?? undefined,
    };

    const registeredPatient = await this.patientRepository.create(newPatient);

    return { patient: registeredPatient, createSystem };
  }
}
