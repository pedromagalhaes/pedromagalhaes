/* Stylelint for styled components */
module.exports = {
  processors: ['stylelint-processor-styled-components'],
  extends: ['stylelint-config-standard', 'stylelint-config-styled-components'],
  rules: {
    indentation: 2,
    'comment-empty-line-before': null,
    'no-descending-specificity': null,
    'number-leading-zero': null
  },
  ignoreFiles: [
    '**/node_modules/**',
    '**/src/server/**',
    '**/src/tools/**',
    '**/src/dmi-ui/stylesheets/**',
    '**/src/app/static/**',
    '**/**.json',
    '**/**.log'
  ]
}
