// import of test tools
const { RuleTester } = require("eslint");

// import related rules
const rule = require("../../../lib/rules/get-method-needs-return");

const ruleTester = new RuleTester();

ruleTester.run("test get-method-needs-return", rule, {
  valid: [
    {
      name: "success",
      code: `
                function getName() {
                    return ''
                }
            `,
    },
    {
      name: "setName",
      code: `function setName() {}`,
    },
  ],
  invalid: [
    {
      name: "body is empty",
      code: `function getName() {}`,
      errors: [
        {
          message: "getName must return a value",
        },
      ],
    },
    {
      name: "no return value",
      code: `
                function getName() {
                    var name = 'syukinmei'
                }
            `,
      errors: [
        {
          message: "getName must return a value",
        },
      ],
    },
  ],
});
