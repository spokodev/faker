import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';
import { filterWordListByLength } from './_filter-word-list-by-length';

/**
 * Returns a random adverb.
 *
 * @param fakerCore The FakerCore to use.
 * @param options The expected length of the word or the options to use.
 * @param options.length The expected length of the word.
 * @param options.strategy The strategy to apply when no words with a matching length are found.
 *
 * Available error handling strategies:
 *
 * - `fail`: Throws an error if no words with the given length are found.
 * - `shortest`: Returns any of the shortest words.
 * - `closest`: Returns any of the words closest to the given length.
 * - `longest`: Returns any of the longest words.
 * - `any-length`: Returns a word with any length.
 *
 * Defaults to `'fail'`.
 *
 * @example
 * adverb(fakerCore) // 'quarrelsomely'
 * adverb(fakerCore, 5) // 'madly'
 * adverb(fakerCore, { strategy: 'shortest' }) // 'too'
 * adverb(fakerCore, { length: { min: 5, max: 7 }, strategy: "fail" }) // 'sweetly'
 *
 * @since 6.0.0
 */
export function adverb(
  fakerCore: FakerCore,
  options:
    | number
    | {
        /**
         * The expected length of the word.
         */
        length?:
          | number
          | {
              /**
               * The minimum length of the word.
               */
              min: number;
              /**
               * The maximum length of the word.
               */
              max: number;
            };
        /**
         * The strategy to apply when no words with a matching length are found.
         *
         * Available error handling strategies:
         *
         * - `fail`: Throws an error if no words with the given length are found.
         * - `shortest`: Returns any of the shortest words.
         * - `closest`: Returns any of the words closest to the given length.
         * - `longest`: Returns any of the longest words.
         * - `any-length`: Returns a word with any length.
         *
         * @default 'fail'
         */
        strategy?: 'fail' | 'closest' | 'shortest' | 'longest' | 'any-length';
      } = {}
): string {
  if (typeof options === 'number') {
    options = { length: options };
  }

  return arrayElement(
    fakerCore,
    filterWordListByLength({
      ...options,
      wordList: fakerCore.locale.word.adverb,
    })
  );
}
