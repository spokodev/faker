import type { FakerCore } from '../../core';
import { manufacturer } from '../vehicle/manufacturer';
import { model } from '../vehicle/model';

/**
 * Returns a random vehicle.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * vehicle(fakerCore) // 'BMW Explorer'
 *
 * @since 5.0.0
 */
export function vehicle(fakerCore: FakerCore): string {
  return `${manufacturer(fakerCore)} ${model(fakerCore)}`;
}
