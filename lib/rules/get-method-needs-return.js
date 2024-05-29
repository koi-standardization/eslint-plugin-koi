// A function that starts with a get name must return a value
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "A function that starts with a get name must return a value",
    },
    schema: [],
    fixable: "code",
  },

  create(context) {
    return {
      FunctionDeclaration(node) {
        const VALID_REGEX = /^get[A-Z]/;
        const functionName = node?.id?.name;

        // check function name
        if (!VALID_REGEX.test(functionName)) return;

        const blockStatementBody = node?.body?.body;
        const lastNode = blockStatementBody[blockStatementBody.length - 1];
        if (!lastNode || lastNode?.type !== "ReturnStatement") {
          context.report({
            node,
            message: `${functionName} must return a value`,
            fix(fixer) {
              return fixer.replaceTextRange(
                [node.range[1] - 1, node.range[1] - 1],
                "return"
              );
            },
          });
        }
      },
    };
  },
};
