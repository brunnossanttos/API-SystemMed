import { Request, Response } from 'express';
import { CreatePatientUseCase } from 'src/aplication/patients/createPatient.UseCase';
import { ListPatientsUseCase } from 'src/aplication/patients/listPatient.UseCase';
import { IPatient } from 'src/domain/interface/patient/IPatient';
import { PatientRepository } from 'src/infra/repositories/patientRepository';

const patientsRepository = new PatientRepository();
const listPatientsUseCase = new ListPatientsUseCase(patientsRepository);
const createPacienteUseCase = new CreatePatientUseCase(patientsRepository);

export const PatientsController = {
  list: async (req: Request, res: Response) => {
    const patients = await listPatientsUseCase.execute();

    res.json({ patients });
  },

  create: async (req: Request, res: Response) => {
    const { name, email, password, age, city }: IPatient = req.body;

    const result = await createPacienteUseCase.execute(
      { name, email, password, age, city },
      'API Node',
    );

    res.status(201).json(result);
  },
};
