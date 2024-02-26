import { writeFile } from 'fs/promises';

export class FileService {
  async upload(file: Express.Multer.File, path: string) {
    return writeFile(path, file.buffer);
  }
}
