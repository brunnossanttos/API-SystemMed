import { Request, Response } from "express";
import { CreatePatientUseCase } from "src/aplication/patients/createPatient.UseCase";
import { ListPatientsUseCase } from "src/aplication/patients/listPatient.UseCase";
import { IPatient } from "src/domain/interface/patient/IPatient";
import { PatientsRepositoryInMemory } from "src/test/repositoriesInMemory.ts/patientsRepositoryInMemory";

const patientsRepositoryInMemory = new PatientsRepositoryInMemory();
const listPatientsUseCase = new ListPatientsUseCase(patientsRepositoryInMemory);
const createPacienteUseCase = new CreatePatientUseCase(
  patientsRepositoryInMemory
);

export const PatientsController = {
  list: async (req: Request, res: Response) => {
    const patients = await listPatientsUseCase.execute();

    res.json({ patients });
  },

  create: async (req: Request, res: Response) => {
    const { name, age, city }: IPatient = req.body;

    const result = await createPacienteUseCase.execute(
      { name, age, city },
      "API Node"
    );

    res.status(201).json(result);
  },
};
