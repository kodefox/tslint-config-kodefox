module.exports = {
  defaultSeverity: 'error',
  rules: {
    'array-type': [true, 'generic'],
    'interface-name': [true, 'never-prefix'],
    'interface-over-type-literal': false,
    'max-classes-per-file': false,
    'member-access': [true, 'no-public'],
    'no-empty': [true, 'allow-empty-functions'],
    'no-unused-expression': [true, 'allow-fast-null-checks']
    'object-literal-sort-keys': false,
    'ordered-imports': false,
    'prefer-const': false,
    'variable-name': false,
  },
};
