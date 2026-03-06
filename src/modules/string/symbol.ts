import type { FakerCore } from '../../core';
import { fromCharacters } from '../string/from-characters';

const SYMBOL_CHARS = [
  '!',
  '"',
  '#',
  '$',
  '%',
  '&',
  "'",
  '(',
  ')',
  '*',
  '+',
  ',',
  '-',
  '.',
  '/',
  ':',
  ';',
  '<',
  '=',
  '>',
  '?',
  '@',
  '[',
  '\\',
  ']',
  '^',
  '_',
  '`',
  '{',
  '|',
  '}',
  '~',
];

/**
 * Returns a string containing only special characters from the following list:
 *
 * ```txt
 * ! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~
 * ```
 *
 * @param fakerCore The FakerCore to use.
 * @param length The length of the string to generate either as a fixed length or as a length range. Defaults to `1`.
 * @param length.min The minimum length of the string to generate.
 * @param length.max The maximum length of the string to generate.
 *
 * @example
 * symbol(fakerCore) // '$'
 * symbol(fakerCore, 5) // '#*!.~'
 * symbol(fakerCore, { min: 5, max: 10 }) // ')|@*>^+'
 *
 * @since 8.0.0
 */
export function symbol(
  fakerCore: FakerCore,
  length:
    | number
    | {
        /**
         * The minimum length of the string to generate.
         */
        min: number;
        /**
         * The maximum length of the string to generate.
         */
        max: number;
      } = 1
): string {
  return fromCharacters(fakerCore, SYMBOL_CHARS, length);
}
