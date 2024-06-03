import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


export default [
  {
    "languageOptions": { globals: globals.browser },
    "ignores": ["**/*.config.*", "!**/eslint.config.*"],
    "rules": {
      "source_type": "module",
      "semi": "error",
      "prefer-const": "error",
      "no-unused-vars": "error",
      "no_use_before_define": "warn",
      "no-undef": "error",
      "max-len": ["warn",
        {
          "code": 280,
          "ignoreComments": true,
          "ignoreTrailingComments": true,
          "ignoreTemplateLiterals": true,
          "ignoreUrls": true
        }],
      "lines-between-class-members": "off",
      "no-promise-executor-return": "off",
      "class-methods-use-this": "off",
      "no-plusplus": "off",
      "extends": ["prettier"]
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended

];