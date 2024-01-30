import {Client, Context, ContextParams} from '@aragon/sdk-client';

export function getClient(params: Partial<ContextParams>): Client {
  const ctx = new Context(params);
  return new Client(ctx);
}
