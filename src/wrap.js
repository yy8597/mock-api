
var successSchema = {
    type: "object",
    properties: {
        status: {
            type: "integer",
            enum: [0]
        }
    },
    required: ["status"]
};

module.exports = {
    success: data => {
        return {
            type: "object",
            properties: {
                status: {
                    type: "integer",
                    enum: [0]
                },
                data,
            },
            required: ["status", "data"]
        };
    }
}