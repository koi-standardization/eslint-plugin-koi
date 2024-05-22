// The method used to send the request must start with the re name
module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Constrains the name of the method used to send the request",
    },
    fixable: "code",
    schema: [],
    messages: {
      someMessageId:
        "The method used to send the request must start with the re name",
    },
  },

  create(context) {
    return {
      // Listen return statement
      ReturnStatement(node) {
        if (node?.argument?.callee?.name === "axios") {
          // check function name
          //   const functionName =  context.getScope().block.id.name
          const functionName = node?.parent?.parent?.id?.name;
          const isValid = functionName.startsWith("re");
          if (!isValid) {
            context.report({
              node,
              message: "someMessageId",
            });
          }
        }
      },
    };
  },
};
