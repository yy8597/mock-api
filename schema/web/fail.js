var schema = {
    type: "object",
    properties: {
        status: {
            type: "integer",
            enum: [1]
        },
        msg: {
            type: "string",
            enum: ["接口请求错误"]
        }
    },
    required: ["status", "msg"]
};

module.exports = schema;
