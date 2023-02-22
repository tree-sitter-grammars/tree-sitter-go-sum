/**
 * @file gosum grammar for tree-sitter
 * @author Amaan Qureshi <amaanq12@gmail.com>
 * @license MIT
 * @see {@link https://go.dev/ref/mod#go-sum-files|official syntax spec}
 */

/* eslint-disable arrow-parens */
/* eslint-disable camelcase */
/* eslint-disable-next-line spaced-comment */
/// <reference types="tree-sitter-cli/dsl" />
// @ts-check

module.exports = grammar({
  name: 'gosum',

  rules: {
    checksum_database: $ => repeat1($.checksum),

    checksum: $ => seq(
      $.module_path,
      seq($.version, optional(seq('/', 'go.mod'))),
      $.checksum_value,
    ),

    module_path: _ => /[a-zA-Z0-9\-_\./]+/,
    version: $ => seq(
      alias(seq(
        'v',
        field('major', $.number),
        '.',
        field('minor', $.number),
        '.',
        field('patch', $.number)), $.module_version),
      optional(seq(
        '-',
        field(
          'pre_release',
          choice(
            $.number_with_decimal, // YYYYMMDDHHMMSS
            seq(
              choice('alpha', 'beta', 'dev', 'pre', 'rc'),
              optional('.'),
              $.number,
              optional(seq('.', $.number_with_decimal)),
            ),
          ),
        ),
        optional(seq('-', field('build', $.hex_number))),
      )),
      optional('+incompatible'),
    ),

    checksum_value: $ => seq(
      $.hash_version,
      ':',
      $.hash,
    ),

    // currently only h1 is supported
    hash_version: _ => 'h1',

    hash: _ => /[a-zA-Z0-9+/]+={0,2}/,

    number: _ => /\d+/,
    number_with_decimal: _ => /[\d\.]+/,
    hex_number: _ => /[0-9a-fA-F]+/,
  },
});
