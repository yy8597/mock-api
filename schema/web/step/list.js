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
                    status: {
                        type: "string",
                        enum: ["0", "1", "2"]
                    }
                },
                required: ["name", "id", "status"]
            },
            minItems: 10
        },
        pagination
    },
    required: ["steps", "pagination"]
});

module.exports = schema;
