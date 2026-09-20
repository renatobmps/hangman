// For more info, see https://github.com/storybookjs/eslint-plugin-storybook#configuration-flat-config-format
import storybook from "eslint-plugin-storybook";

import globals from "globals";
import pluginJs from "@eslint/js";

export default [{
  languageOptions: {
    globals: globals.node, // or globals.browser
  },
}, pluginJs.configs.recommended, ...storybook.configs["flat/recommended"]];
