import BigNumber = require('bn.js');
import * as us from 'underscore';

type Unit =
  | 'kwei'
  | 'femtoether'
  | 'babbage'
  | 'mwei'
  | 'picoether'
  | 'lovelace'
  | 'qwei'
  | 'nanoether'
  | 'shannon'
  | 'microether'
  | 'szabo'
  | 'nano'
  | 'micro'
  | 'milliether'
  | 'finney'
  | 'milli'
  | 'ether'
  | 'kether'
  | 'grand'
  | 'mether'
  | 'gether'
  | 'tether';
export default interface Utils {
  BN: BigNumber; // TODO only static-definition
  isBN(val: any): boolean;
  isBigNumber(val: any): boolean;
  isAddress(val: any): boolean;
  isHex(val: any): boolean;
  isHexStrict(val: any): boolean;
  _: us.UnderscoreStatic;
  asciiToHex(val: string): string;
  hexToAscii(val: string): string;
  bytesToHex(val: number[]): string;
  numberToHex(val: number | BigNumber): string;
  checkAddressChecksum(address: string): boolean;
  fromAscii(val: string): string;
  fromDecimal(val: string | number | BigNumber): string;
  fromUtf8(val: string): string;
  fromWei(val: string | number | BigNumber, unit: Unit): string | BigNumber;
  hexToBytes(val: string): number[];
  hexToNumber(val: string | number | BigNumber): number;
  hexToNumberString(val: string | number | BigNumber): string;
  hexToString(val: string): string;
  hexToUtf8(val: string): string;
  keccak256(val: string): string;
  leftPad(string: string, chars: number, sign: string): string;
  padLeft(string: string, chars: number, sign: string): string;
  rightPad(string: string, chars: number, sign: string): string;
  padRight(string: string, chars: number, sign: string): string;
  sha3(val: string, val2?: string, val3?: string, val4?: string, val5?: string): string;
  soliditySha3(val: string): string;
  randomHex(bytes: number): string;
  stringToHex(val: string): string;
  toAscii(hex: string): string;
  toBN(val: any): BigNumber;
  toChecksumAddress(val: string): string;
  toDecimal(val: any): number;
  toHex(val: any): string;
  toUtf8(val: any): string;
  toWei(val: string | number | BigNumber, unit: Unit): string | BigNumber;
  unitMap: any;
}
