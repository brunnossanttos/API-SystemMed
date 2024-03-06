import { Request, Response } from "express";
import { CreateHospitalUseCase } from "src/aplication/hospitals/createHospital.UseCase";
import { ListHospitalsUseCase } from "src/aplication/hospitals/listHospitals.UseCase";
import { HospitalsRepositoryInMemory } from "src/test/repositoriesInMemory.ts/hospitalsRepositoryInMemory";

const hospitalsRepositoryInMemory = new HospitalsRepositoryInMemory();
const listHospitalUseCase = new ListHospitalsUseCase(
  hospitalsRepositoryInMemory
);
const createHospitalUseCase = new CreateHospitalUseCase(
  hospitalsRepositoryInMemory
);

export const HospitalsController = {
  list: async (req: Request, res: Response) => {
    const hospitals = await listHospitalUseCase.execute();

    res.json({ hospitals });
  },

  create: async (req: Request, res: Response) => {
    const { name, cnpj, city } = req.body;

    const result = await createHospitalUseCase.execute(
      { name, cnpj, city },
      "API Node"
    );

    res.status(201).json(result);

    return "cadastro de hospitais!";
  },
};
