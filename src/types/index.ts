import { default as Provider } from './Provider';

export interface FaucetOptions {
  privateKey?: string;
  mnemonic?: string;
  provider?: Provider | string;
}

export { default as Provider } from './Provider';