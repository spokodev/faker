import type { FakerCore } from '../../core';
import { enumValue } from '../helpers/enum-value';

/**
 * Returns a random CSS-supported color space name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * cssSupportedSpace(fakerCore) // 'display-p3'
 *
 * @since 7.0.0
 */
export function cssSupportedSpace(fakerCore: FakerCore): CssSpaceType {
  return enumValue(fakerCore, CssSpace);
}
