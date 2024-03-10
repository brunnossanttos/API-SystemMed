import { Request, Response } from 'express';
import { CreateHospitalUseCase } from 'src/aplication/hospitals/createHospital.UseCase';
import { DeleteHospitalUseCase } from 'src/aplication/hospitals/deleteHospital.UseCase';
import { ListHospitalsUseCase } from 'src/aplication/hospitals/listHospitals.UseCase';
import { ShowHospitalUseCase } from 'src/aplication/hospitals/showHospital.UseCase';
import { HospitalRepository } from 'src/infra/repositories/hospitalRepository';

const hospitalsRepository = new HospitalRepository();
const listHospitalUseCase = new ListHospitalsUseCase(hospitalsRepository);
const showHospitalUseCase = new ShowHospitalUseCase(hospitalsRepository);
const createHospitalUseCase = new CreateHospitalUseCase(hospitalsRepository);
const deleteHospitalUseCase = new DeleteHospitalUseCase(hospitalsRepository);

export const HospitalsController = {
  list: async (req: Request, res: Response) => {
    const hospitals = await listHospitalUseCase.execute();

    res.json({ hospitals });
  },

  show: async (req: Request, res: Response) => {
    const { id } = req.params;

    const hospital = await showHospitalUseCase.execute(id);

    return res.status(200).json({ hospital });
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

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    await deleteHospitalUseCase.execute(id);

    return res.status(204).json('Deleted successfully!');
  },
};
