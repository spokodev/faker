import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';

/**
 * Generates a random airline.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * airline(fakerCore) // { name: 'American Airlines', iataCode: 'AA' }
 *
 * @since 8.0.0
 */
export function airline(fakerCore: FakerCore): Airline {
  return arrayElement(fakerCore, fakerCore.locale.airline.airline);
}
