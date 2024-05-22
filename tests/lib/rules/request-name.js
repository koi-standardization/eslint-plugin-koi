// import of test tools
const { RuleTester } = require("eslint");

// import related rules
const rule = require("../../../lib/rules/request-name");

var ruleTester = new RuleTester();

ruleTester.run("test request-name ", rule, {
  valid: [
    `
        function reUserInfo() {
            return axios({
                method: 'get',
                url: 'http://xxxxxxxx/userInfo'
            })
        }
    `,
  ],
  invalid: [
    {
      code: `
            function getUserInfo() {
                return axios({
                    method: 'get',
                    url: 'http://xxxxxxxx/userInfo'
                })
            }
        `,
      errors: [{}],
    },
  ],
});
