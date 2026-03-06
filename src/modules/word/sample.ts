import type { FakerCore } from '../../core';
import { FakerError } from '../../errors/faker-error';
import { shuffle } from '../helpers/shuffle';
import { adjective } from './adjective';
import { adverb } from './adverb';
import { conjunction } from './conjunction';
import { interjection } from './interjection';
import { noun } from './noun';
import { preposition } from './preposition';
import { verb } from './verb';

/**
 * Returns a random word, that can be an adjective, adverb, conjunction, interjection, noun, preposition, or verb.
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
 * sample(fakerCore) // 'incidentally'
 * sample(fakerCore, 5) // 'fruit'
 *
 * @since 8.0.0
 */
export function sample(
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
  const wordMethods = shuffle(fakerCore, [
    adjective,
    adverb,
    conjunction,
    interjection,
    noun,
    preposition,
    verb,
  ] satisfies Array<typeof sample>);

  for (const randomWordMethod of wordMethods) {
    try {
      return randomWordMethod(fakerCore, options);
    } catch {
      // catch missing locale data potentially required by randomWordMethod
      continue;
    }
  }

  throw new FakerError(
    'No matching word data available for the current locale'
  );
}
