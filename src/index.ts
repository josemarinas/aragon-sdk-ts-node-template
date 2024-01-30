import {getClient} from './client';
import {fetch} from '@web-std/fetch';
import {Blob, File} from '@web-std/file';
import {FormData} from '@web-std/form-data';

globalThis.fetch = fetch;
globalThis.FormData = FormData;
globalThis.Blob = Blob;
globalThis.File = File;

main().catch(console.error);
async function main() {
  const client = getClient({
    network: 'goerli',
    web3Providers: 'https://ethereum-goerli.publicnode.com',
  });
  const dao = await client.methods.getDao('aragon.dao.eth');
  const cid = await client.ipfs.add('hello world');
  console.log(dao);
  console.log(cid);
}
