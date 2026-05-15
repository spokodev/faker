import type { FakerCore } from '../../core';
import { arrayElement } from '../helpers/array-element';
import { filterWordListByLength } from '../word/_filter-word-list-by-length';

/**
 * Generates a word of a specified length.
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
 * Defaults to `'any-length'`.
 *
 * @example
 * word(fakerCore) // 'temporibus'
 * word(fakerCore, 5) // 'velit'
 * word(fakerCore, { strategy: 'shortest' }) // 'a'
 * word(fakerCore, { length: { min: 5, max: 7 }, strategy: 'fail' }) // 'quaerat'
 *
 * @since 3.1.0
 */
export function word(
  fakerCore: FakerCore,
  options:
    | number
    | {
        /**
         * The expected length of the word.
         *
         * @default 1
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
         * @default 'any-length'
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
      wordList: fakerCore.locale.lorem.word,
    })
  );
}
