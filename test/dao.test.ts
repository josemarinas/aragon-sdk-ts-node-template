import {getDao} from '../src/dao';
import {fetch} from '@web-std/fetch';
import {Blob, File} from '@web-std/file';
import {FormData} from '@web-std/form-data';

globalThis.fetch = fetch;
globalThis.FormData = FormData;
globalThis.Blob = Blob;
globalThis.File = File;

describe('tests', () => {
  describe('dao', () => {
    it('should get a dao', async () => {
      const dao = await getDao('aragon.dao.eth');
      expect(dao === null).toBe(false);
    });
  });
});
