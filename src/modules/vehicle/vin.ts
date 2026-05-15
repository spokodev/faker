import type { FakerCore } from '../../core';
import { alpha } from '../string/alpha';
import { alphanumeric } from '../string/alphanumeric';
import { numeric } from '../string/numeric';

/**
 * Returns a vehicle identification number (VIN).
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * vin(fakerCore) // 'YV1MH682762184654'
 *
 * @since 5.0.0
 */
export function vin(fakerCore: FakerCore): string {
  const exclude = ['o', 'i', 'q', 'O', 'I', 'Q'];
  return `${alphanumeric(fakerCore, {
    length: 10,
    casing: 'upper',
    exclude,
  })}${alpha(fakerCore, {
    length: 1,
    casing: 'upper',
    exclude,
  })}${alphanumeric(fakerCore, {
    length: 1,
    casing: 'upper',
    exclude,
  })}${numeric(fakerCore, { length: 5, allowLeadingZeros: true })}`;
}
