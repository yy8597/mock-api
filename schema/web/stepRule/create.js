var schema = {
    type: "object",
    properties: {
        status: {
            type: "integer",
            enum: [0]
        }
    },
    required: ["status"]
};

module.exports = schema;
