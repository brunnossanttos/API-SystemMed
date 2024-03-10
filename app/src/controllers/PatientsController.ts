import { Request, Response } from 'express';
import { CreatePatientUseCase } from 'src/aplication/patients/createPatient.UseCase';
import { DeletePatientUseCase } from 'src/aplication/patients/deletePatient.UseCase';
import { ListPatientsUseCase } from 'src/aplication/patients/listPatient.UseCase';
import { ShowPatientUseCase } from 'src/aplication/patients/showPatient.UseCase';
import { IPatient } from 'src/domain/interface/patient/IPatient';
import { PatientRepository } from 'src/infra/repositories/patientRepository';

const patientsRepository = new PatientRepository();
const listPatientsUseCase = new ListPatientsUseCase(patientsRepository);
const showPatientUseCase = new ShowPatientUseCase(patientsRepository);
const createPacienteUseCase = new CreatePatientUseCase(patientsRepository);
const deletePatientUseCase = new DeletePatientUseCase(patientsRepository);

export const PatientsController = {
  list: async (req: Request, res: Response) => {
    const patients = await listPatientsUseCase.execute();

    res.status(200).json({ patients });
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    const patient = await showPatientUseCase.execute(id);

    res.status(200).json({ patient });
  },

  create: async (req: Request, res: Response) => {
    const { name, email, password, age, city }: IPatient = req.body;

    const result = await createPacienteUseCase.execute(
      { name, email, password, age, city },
      'API Node',
    );

    res.status(201).json(result);
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;
    await deletePatientUseCase.execute(id);

    return res.status(204).json('Deleted successfully!');
  },
};
