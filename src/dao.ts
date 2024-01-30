import {getClient} from './client';
import {DaoDetails} from '@aragon/sdk-client';

export async function getDao(address: string): Promise<DaoDetails | null> {
  const client = getClient({
    network: 'goerli',
    web3Providers: 'https://ethereum-goerli.publicnode.com',
  });
  return await client.methods.getDao(address);
}
