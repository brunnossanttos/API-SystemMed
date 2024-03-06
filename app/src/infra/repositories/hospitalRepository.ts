import { IHospital } from 'src/domain/interface/hospital/IHospital';
import { IHospitalRepository } from 'src/domain/interface/hospital/IHospitalRepository';
import { HospitalModel } from '../model/hospitalModel';

export class HospitalRepository implements IHospitalRepository {
  async listAll(): Promise<IHospital[]> {
    const hospitals = await HospitalModel.find();

    return hospitals;
  }

  async create(hospital: IHospital): Promise<IHospital> {
    const newHospital = new HospitalModel(hospital);

    newHospital.save();

    return newHospital;
  }
}
