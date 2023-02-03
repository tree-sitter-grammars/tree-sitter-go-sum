[
  "alpha"
  "beta"
  "dev"
  "pre"
  "rc"
  "+incompatible"
] @keyword

[
  (module_path)
  (hash)
] @string

(base_version) @string.special

(hash_version) @symbol

[
 (number)
 (number_with_decimal)
 (hex_number)
] @number

(checksum
  (module_path)
  (version)
  "go.mod" @string)

[
  ":"
  "."
  "-"
  "/"
] @punctuation.delimiter
