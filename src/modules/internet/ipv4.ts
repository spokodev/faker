import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { int } from '../number/int';

/**
 * Generates a random IPv4 address.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.cidrBlock The optional CIDR block to use. Must be in the format `x.x.x.x/y`. Defaults to `'0.0.0.0/0'`.
 *
 * @example
 * ipv4(fakerCore) // '245.108.222.0'
 * ipv4(fakerCore, { cidrBlock: '192.168.0.0/16' }) // '192.168.215.224'
 *
 * @since 6.1.1
 */
export function ipv4(
  fakerCore: FakerCore,
  options?: {
    /**
     * The optional CIDR block to use. Must be in the format `x.x.x.x/y`.
     *
     * @default '0.0.0.0/0'
     */
    cidrBlock?: string;
  }
): string;
/**
 * Generates a random IPv4 address.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.network The optional network to use. This is intended as an alias for well-known `cidrBlock`s. Defaults to `'any'`.
 *
 * @example
 * ipv4(fakerCore) // '245.108.222.0'
 * ipv4(fakerCore, { network: 'private-a' }) // '10.199.154.205'
 *
 * @since 6.1.1
 */
export function ipv4(
  fakerCore: FakerCore,
  options?: {
    /**
     * The optional network to use. This is intended as an alias for well-known `cidrBlock`s.
     *
     * @default 'any'
     */
    network?: IPv4NetworkType;
  }
): string;
/**
 * Generates a random IPv4 address.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The optional options object.
 * @param options.cidrBlock The optional CIDR block to use. Must be in the format `x.x.x.x/y`. Defaults to `'0.0.0.0/0'`.
 * @param options.network The optional network to use. This is intended as an alias for well-known `cidrBlock`s. Defaults to `'any'`.
 *
 * @example
 * ipv4(fakerCore) // '245.108.222.0'
 * ipv4(fakerCore, { cidrBlock: '192.168.0.0/16' }) // '192.168.215.224'
 * ipv4(fakerCore, { network: 'private-a' }) // '10.199.154.205'
 *
 * @since 6.1.1
 */
export function ipv4(
  fakerCore: FakerCore,
  options?:
    | {
        /**
         * The optional CIDR block to use. Must be in the format `x.x.x.x/y`.
         *
         * @default '0.0.0.0/0'
         */
        cidrBlock?: string;
      }
    | {
        /**
         * The optional network to use. This is intended as an alias for well-known `cidrBlock`s.
         *
         * @default 'any'
         */
        network?: IPv4NetworkType;
      }
): string;

export function ipv4(
  fakerCore: FakerCore,
  options: { cidrBlock?: string; network?: IPv4NetworkType } = {}
): string {
  const { network = 'any', cidrBlock = ipv4Networks[network] } = options;

  if (!/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\/\d{1,2}$/.test(cidrBlock)) {
    throw new FakerError(
      `Invalid CIDR block provided: ${cidrBlock}. Must be in the format x.x.x.x/y.`
    );
  }

  const [ipText, subnet] = cidrBlock.split('/');
  const subnetMask = 0xffffffff >>> Number.parseInt(subnet);
  const [rawIp1, rawIp2, rawIp3, rawIp4] = ipText.split('.').map(Number);
  const rawIp = (rawIp1 << 24) | (rawIp2 << 16) | (rawIp3 << 8) | rawIp4;
  const networkIp = rawIp & ~subnetMask;
  const hostOffset = int(fakerCore, subnetMask);
  const ip = networkIp | hostOffset;
  return [
    (ip >>> 24) & 0xff,
    (ip >>> 16) & 0xff,
    (ip >>> 8) & 0xff,
    ip & 0xff,
  ].join('.');
}
