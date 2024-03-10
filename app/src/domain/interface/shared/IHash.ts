export interface IHash {
  generateHash(stringToHash: string): Promise<string>;
  compareHash(stringHashed: string, stringCompare: string): Promise<boolean>;
}
