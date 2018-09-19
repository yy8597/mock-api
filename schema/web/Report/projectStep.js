// var pagination =  require('../../data/pagination')
var wrap = require("../../../src/wrap");
var pagination = require("../../../data/pagination.schema");
var schema = wrap.success({
    type: "object",
    properties: {
        steps: {
            type: "array",
            items: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        chance: {
                            country: {
                                full: true
                            }
                        }
                    },
                    id: {
                        type: "integer",
                        minimum: 0
                    },
                    pass: {
                        type: "number",
                        minimum: 0
                    },
                    fail: {
                        type: "number",
                        minimum: 0
                    },
                    request: {
                        type: "number",
                        minimum: 0
                    }
                },
                required: ["name", "id", "pass", "fail", "request"]
            },
            minItems: 10
        },
        pagination
    },
    required: ["steps", "pagination"]
});

module.exports = schema;
