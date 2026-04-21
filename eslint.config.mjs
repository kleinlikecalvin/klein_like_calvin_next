import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import jsxA11Y from "eslint-plugin-jsx-a11y";
import prettier from "eslint-plugin-prettier";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  ...compat.extends(
    "next/core-web-vitals",
    "next/typescript",
    "plugin:jsx-a11y/recommended",
    "plugin:security/recommended-legacy",
    "next",
  ),
  {
    plugins: {
      "jsx-a11y": jsxA11Y,
      prettier,
    },

    rules: {
      // Keep rules consistent with prettier
      "prettier/prettier": "error",

      "@typescript-eslint/no-unused-vars": [
        "error",
        { varsIgnorePattern: "^_" },
      ],

      // enforces return statements in callbacks of array's methods
      // https://eslint.org/docs/rules/array-callback-return
      "array-callback-return": ["error", { allowImplicit: true }],

      // require parens in arrow function arguments
      // https://eslint.org/docs/rules/arrow-parens
      "arrow-parens": ["error", "always"],

      // encourages use of dot notation whenever possible
      // https://eslint.org/docs/rules/dot-notation
      "dot-notation": ["error", { allowKeywords: true }],

      // Enforce use of strict equalities
      // https://eslint.org/docs/latest/rules/eqeqeq
      eqeqeq: ["error", "always", { null: "ignore" }],

      // make sure for-in loops have an if statement
      // https://eslint.org/docs/rules/guard-for-in
      "guard-for-in": "error",

      // disallow the use of alert, confirm, and prompt
      // https://eslint.org/docs/rules/no-alert
      // TODO: enable, semver-major - LEO-758
      "no-alert": "warn",

      // disallow use of arguments.caller or arguments.callee
      // https://eslint.org/docs/rules/no-caller
      "no-caller": "error",

      // disallow modifying variables that are declared using const
      // https://eslint.org/docs/latest/rules/no-const-assign
      "no-const-assign": "error",

      // disallow using console log
      // https://eslint.org/docs/latest/rules/no-console
      "no-console": ["error", { allow: ["warn", "error"] }],

      // disallow else after a return in an if
      // https://eslint.org/docs/rules/no-else-return
      "no-else-return": ["error", { allowElseIf: false }],

      // disallow empty functions, except for standalone funcs/arrows
      // https://eslint.org/docs/rules/no-empty-function
      "no-empty-function": [
        "error",
        {
          allow: ["arrowFunctions", "functions", "methods"],
        },
      ],

      // disallow empty destructuring patterns
      // https://eslint.org/docs/rules/no-empty-pattern
      "no-empty-pattern": "error",

      // disallow use of eval()
      // https://eslint.org/docs/rules/no-eval
      "no-eval": "error",

      // disallow unnecessary function binding
      // https://eslint.org/docs/rules/no-extra-bind
      "no-extra-bind": "error",

      // disallow the use of leading or trailing decimal points in numeric literals
      // https://eslint.org/docs/rules/no-floating-decimal
      "no-floating-decimal": "error",

      // disallow implicit type conversions
      // https://eslint.org/docs/rules/no-implicit-coercion
      "no-implicit-coercion": [
        "error",
        {
          boolean: false,
          number: true,
          string: true,
          allow: [],
        },
      ],

      // disallow unnecessary nested blocks
      // https://eslint.org/docs/rules/no-lone-blocks
      "no-lone-blocks": "error",

      // disallow creation of functions within loops
      // https://eslint.org/docs/rules/no-loop-func
      "no-loop-func": "error",

      // disallows creating new instances of String, Number, and Boolean
      // https://eslint.org/docs/rules/no-new-wrappers
      "no-new-wrappers": "error",

      // Disallow \8 and \9 escape sequences in string literals
      // https://eslint.org/docs/rules/no-nonoctal-decimal-escape
      "no-nonoctal-decimal-escape": "error",

      // disallow use of (old style) octal literals
      // https://eslint.org/docs/rules/no-octal
      "no-octal": "error",

      // disallow use of octal escape sequences in string literals, such as
      // var foo = 'Copyright \251';
      // https://eslint.org/docs/rules/no-octal-escape
      "no-octal-escape": "error",

      // disallow reassignment of function parameters
      // disallow parameter object manipulation except for specific exclusions
      // rule: https://eslint.org/docs/rules/no-param-reassign.html
      "no-param-reassign": [
        "error",
        {
          props: true,
          ignorePropertyModificationsFor: [
            "acc", // for reduce accumulators
            "accumulator", // for reduce accumulators
            "e", // for e.returnvalue
            "ctx", // for Koa routing
            "context", // for Koa routing
            "req", // for Express requests
            "request", // for Express requests
            "res", // for Express responses
            "response", // for Express responses
            "$scope", // for Angular 1 scopes
            "staticContext", // for ReactRouter context
          ],
        },
      ],

      // disallow usage of __proto__ property
      // https://eslint.org/docs/rules/no-proto
      "no-proto": "error",

      // disallow declaring the same variable more than once
      // https://eslint.org/docs/rules/no-redeclare
      "no-redeclare": "error",

      // disallow next link direct usage
      // https://eslint.org/docs/latest/rules/no-restricted-imports
      "no-restricted-imports": [
        "error",
        {
          name: "next/link",
          importNames: ["default"],
        },
      ],

      // disallow certain object properties
      // https://eslint.org/docs/rules/no-restricted-properties
      "no-restricted-properties": [
        "error",
        {
          object: "arguments",
          property: "callee",
          message: "arguments.callee is deprecated",
        },
        {
          object: "global",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "self",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "window",
          property: "isFinite",
          message: "Please use Number.isFinite instead",
        },
        {
          object: "global",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "self",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          object: "window",
          property: "isNaN",
          message: "Please use Number.isNaN instead",
        },
        {
          property: "__defineGetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          property: "__defineSetter__",
          message: "Please use Object.defineProperty instead.",
        },
        {
          object: "Math",
          property: "pow",
          message: "Use the exponentiation operator (**) instead.",
        },
      ],

      // Disallow unnecessary catch clauses
      // https://eslint.org/docs/rules/no-useless-catch
      "no-useless-catch": "error",

      // disallow useless string concatenation
      // https://eslint.org/docs/rules/no-useless-concat
      "no-useless-concat": "error",

      // disallow unnecessary string escaping
      // https://eslint.org/docs/rules/no-useless-escape
      "no-useless-escape": "error",

      // disallow renaming import, export, and destructured assignments to the same name
      // https://eslint.org/docs/rules/no-useless-rename
      "no-useless-rename": [
        "error",
        {
          ignoreDestructuring: false,
          ignoreImport: false,
          ignoreExport: false,
        },
      ],

      // disallow redundant return; keywords
      // https://eslint.org/docs/rules/no-useless-return
      "no-useless-return": "error",

      // require let or const instead of var
      "no-var": "error",

      // disallow use of void operator
      // https://eslint.org/docs/rules/no-void
      "no-void": "error",

      // require method and property shorthand syntax for object literals
      // https://eslint.org/docs/rules/object-shorthand
      "object-shorthand": [
        "error",
        "always",
        {
          ignoreConstructors: false,
          avoidQuotes: true,
        },
      ],

      // require using Error objects as Promise rejection reasons
      // https://eslint.org/docs/rules/prefer-promise-reject-errors
      "prefer-promise-reject-errors": ["error", { allowEmptyReject: true }],

      // Prefer Object.hasOwn() over Object.prototype.hasOwnProperty.call()
      // https://eslint.org/docs/rules/prefer-object-has-own
      "prefer-object-has-own": "error",

      // https://eslint.org/docs/rules/prefer-regex-literals
      "prefer-regex-literals": [
        "error",
        {
          disallowRedundantWrapping: true,
        },
      ],

      // suggest using of const declaration for variables that are never modified after declared
      "prefer-const": [
        "error",
        {
          destructuring: "any",
          ignoreReadBeforeAssign: true,
        },
      ],

      // Prefer destructuring from arrays and objects
      // https://eslint.org/docs/rules/prefer-destructuring
      "prefer-destructuring": [
        "error",
        {
          VariableDeclarator: {
            array: false,
            object: true,
          },
          AssignmentExpression: {
            array: true,
            object: false,
          },
        },
        {
          enforceForRenamedProperties: false,
        },
      ],

      // suggest using the spread syntax instead of .apply()
      // https://eslint.org/docs/rules/prefer-spread
      "prefer-spread": "error",

      // suggest using template literals instead of string concatenation
      // https://eslint.org/docs/rules/prefer-template
      "prefer-template": "error",

      // Enforce boolean attributes notation in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-boolean-value.md
      "react/jsx-boolean-value": ["error", "never", { always: [] }],

      // Disallow unnecessary JSX expressions when literals alone are sufficient or enforce JSX expressions on literals in JSX children or attributes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-brace-presence.md
      "react/jsx-curly-brace-presence": "error",

      // Enforce or disallow spaces inside of curly braces in JSX attributes
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-curly-spacing.md
      "react/jsx-curly-spacing": ["error", "never", { allowMultiline: true }],

      // Enforce event handler naming conventions in JSX
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-handler-names.md
      "react/jsx-handler-names": [
        "error",
        {
          eventHandlerPrefix: "handle",
          eventHandlerPropPrefix: "on",
        },
      ],

      // Enforce PascalCase for user-defined JSX components
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/jsx-pascal-case.md
      "react/jsx-pascal-case": [
        "error",
        {
          allowAllCaps: true,
          ignore: [],
        },
      ],

      // Prevent usage of dangerous JSX properties
      // https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/no-danger.md
      "react/no-danger": "warn",
    },
  },
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;
