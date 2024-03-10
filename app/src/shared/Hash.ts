import { IHash } from 'src/domain/interface/shared/IHash';
import { compare, hash } from 'bcryptjs';

export class HashString implements IHash {
  async generateHash(stringToHash: string): Promise<string> {
    return hash(stringToHash, 8);
  }

  async compareHash(
    stringHashed: string,
    stringToCompare: string,
  ): Promise<boolean> {
    return compare(stringToCompare, stringHashed);
  }
}
