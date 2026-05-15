import type { FakerCore } from '../../core';
import { domainSuffix } from '../internet/domain-suffix';
import { domainWord } from '../internet/domain-word';

/**
 * Generates a random domain name.
 *
 * @param fakerCore The FakerCore to use.
 *
 * @example
 * domainName(fakerCore) // 'slow-timer.info'
 *
 * @since 2.0.1
 */
export function domainName(fakerCore: FakerCore): string {
  return `${domainWord(fakerCore)}.${domainSuffix(fakerCore)}`;
}
