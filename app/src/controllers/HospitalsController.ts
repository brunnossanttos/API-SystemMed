import { Request, Response } from 'express';
import { CreateHospitalUseCase } from 'src/aplication/hospitals/createHospital.UseCase';
import { ListHospitalsUseCase } from 'src/aplication/hospitals/listHospitals.UseCase';
import { HospitalRepository } from 'src/infra/repositories/hospitalRepository';

const hospitalsRepository = new HospitalRepository();
const listHospitalUseCase = new ListHospitalsUseCase(hospitalsRepository);
const createHospitalUseCase = new CreateHospitalUseCase(hospitalsRepository);

export const HospitalsController = {
  list: async (req: Request, res: Response) => {
    const hospitals = await listHospitalUseCase.execute();

    res.json({ hospitals });
  },

  create: async (req: Request, res: Response) => {
    const { name, email, password, cnpj, city } = req.body;

    const result = await createHospitalUseCase.execute(
      { name, email, password, cnpj, city },
      'API Node',
    );

    res.status(201).json(result);

    return 'cadastro de hospitais!';
  },
};
