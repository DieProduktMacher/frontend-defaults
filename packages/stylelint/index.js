module.exports = {
  extends: ['stylelint-config-standard-scss', 'stylelint-config-prettier-scss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'layer',
          /** tailwindcss v1, v2 */
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
  },
};
