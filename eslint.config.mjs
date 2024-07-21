import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";


export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } },
    settings : { 
      react: {
        version: "detect"
      }
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
];