// stylelint.config.mjs
import bemPlugin from 'stylelint-selector-bem-pattern';

export default {
  extends: ['stylelint-config-standard-scss'],
  plugins: ['stylelint-scss', bemPlugin],
  customSyntax: 'postcss-scss',
  rules: {
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-pattern': '^[_a-z][a-z0-9-]*$',
    'scss/comment-no-empty': true,

    // Allow lowercase, kebab-case, and BEM (__ for elements, -- for modifiers)
    'selector-class-pattern': [
      '^[a-z][a-z0-9]*(?:-[a-z0-9]+)*(?:__[a-z0-9]+)*(?:--[a-z0-9]+)*$',
      {
        message:
          'Class selectors should be lowercase, kebab-case, and may include BEM (__ for elements, -- for modifiers)',
      },
    ],

    // BEM plugin config
    'plugin/selector-bem-pattern': {
      componentName: '[a-z]+(?:-[a-z]+)*',
      componentSelectors: {
        initial:
          '^\\.{{componentName}}(__[a-z0-9]+(?:-[a-z0-9]+)*)?(--[a-z0-9]+)?$',
      },
    },
  },
};