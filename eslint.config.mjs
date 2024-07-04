import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    // files: ['./src/**/*.js', './src/**/*.ts'],
    // files: ['./src/**/*.js', './src/**/*.ts'],

    languageOptions: {
      ecmaVersion: 2023,
      sourceType: 'module',
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    // plugins: [
    //   '@typescript-eslint',
    // ],
    rules: {
      // 在这里你可以覆盖或添加特定的规则
      // 例如，禁用某个规则：'rule-name': 'off',
      // 或调整规则的严格程度：'rule-name': ['error', { options }],
      // 以下是一些常见的规则调整示例
      'indent': ['error', 2], // 使用2个空格缩进
      'quotes': ['error', 'single'], // 使用单引号
      'semi': ['error', 'never'], // 语句末尾无需分号
      // 更多根据团队编码规范自定义...
    },
  },
)
